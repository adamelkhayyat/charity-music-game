import { useEffect, useState } from "react";
// import './Exercise.css';

export const ExerciseComp = ({ onExerciseEnd }) => {

  let currentInstanceCounter = 0;

  // time is in seconds, so 00:24 => 24, 01:30 => 90
  const bellInstances = [
    {
      time: 24,
    },
    {
      time: 42
    },
    {
      time: 68
    },
    {
      time: 118
    },
    {
      time: 119
    },
    {
      time: 127
    },
    {
      time: 157
    },
  ];

  const [soundCaught, setSoundCaught] = useState([]);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let checkedInterval = null;
    let startTime = null;
    let endTime = null;
    const musicPlayer = document.getElementById('music-player');

    // set up listener for space key
    document.addEventListener('keydown', event => {
      if (event.code === 'Space' && startTime !== null) {
        console.log('Space pressed');
        endTime = new Date().getTime();
        const responseTime = (endTime - startTime) / 1000;

        console.log("time taken:", responseTime, "secs!");

        const state = {
          time: responseTime,
          soundAt: bellInstances[currentInstanceCounter - 1].time.toFixed(2),
          iteration: currentInstanceCounter - 1
        };
        setSoundCaught(arr => [...arr, state])

        // reset timers
        startTime = null;
        endTime = null;
      }
    })

    musicPlayer.addEventListener('play', (event) => {
      console.log("Music is going! 🎷");
      console.log(musicPlayer.currentTime);

      console.log("bell details:", bellInstances[currentInstanceCounter].time.toFixed(2));

      // start measuring...
      checkedInterval = setInterval(function () {
          // check if we're reaching a point in the music where a special sound is played
          if (bellInstances[currentInstanceCounter].time.toFixed(2) === musicPlayer.currentTime.toFixed(2)) {
            // start timer to calculate response time
            startTime = new Date().getTime();
            console.log("Bell rings!");

            // move on to next (possible) special sound to look out for
            if (currentInstanceCounter < (bellInstances.length - 1)) currentInstanceCounter++;
          }
      }, 5);
    });

    musicPlayer.addEventListener('pause', (event) => {
      console.log("Music has been paused! ⏸");
      clearInterval(checkedInterval);
    });

    musicPlayer.addEventListener('ended', (event) => {
      console.log("Music has ended! 👋");
      clearInterval(checkedInterval);
      onExerciseEnd();
    });
  });

  const controlAudio = (e) => {
    e.preventDefault();
    const yourAudio = document.getElementById('music-player');
    setPlaying(true);
    yourAudio.play();
  }

  return (
    <div className="App">
      <h3>Listen for the bell 🔔</h3>
      <audio
          id="music-player"
          controls
          src="/media/bell-sample.mp3"
          style={{display: "none"}}>
        Your browser does not support the <code>audio</code> element.
      </audio>

      {playing ? <i>Audio started playing...</i> : <a href="#" id="audio-control" onClick={controlAudio}>Play Audio</a>}

      { soundCaught.map(sc => <p>Bell number {sc.iteration}, originally played at {sc.soundAt}, was caught within {sc.time} seconds.</p>)}
    </div>
  );
}
