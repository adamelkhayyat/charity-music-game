import { useEffect, useRef, useState } from "react";
// import './Exercise.css';

const CelebrationComp = ({reactionTime}) => {
  return (
    <h1 id="celebration">👏👏👏</h1>
  )
}

export const ExerciseComp = ({ onExerciseEnd }) => {

  let currentInstanceCounter = 0;

  // time is in seconds, so 00:24 => 24, 01:30 => 90
  const bellInstances = [
    {
      time: 1,
    },
    {
      time: 5
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    let checkedInterval = null;
    let startTime = null;
    let endTime = null;
    const musicPlayer = document.getElementById('music-player');

    // set up listener for space key
    document.addEventListener('keydown', event => {
      if (event.code === 'Space' && startTime !== null) {
        endTime = new Date().getTime();
        const responseTime = (endTime - startTime) / 1000;
        const state = {
          time: responseTime,
          soundAt: bellInstances[currentInstanceCounter - 1].time.toFixed(2),
          iteration: currentInstanceCounter
        };

        if (responseTime <= 1) {
          celebrate();
        }

        // remove dup hack
        setSoundCaught(arr => [...new Set([...arr, state])])

        // reset timers
        startTime = null;
        endTime = null;
      }
    })

    musicPlayer.addEventListener('play', (e) => {
      e.preventDefault();
      setIsPlaying(true);

      // start measuring...
      checkedInterval = setInterval(function () {
          // check if we're reaching a point in the music where a special sound is played
          if (bellInstances[currentInstanceCounter].time.toFixed(2) === musicPlayer.currentTime.toFixed(2)) {
            // start timer to calculate response time
            startTime = new Date().getTime();

            // move on to next (possible) special sound to look out for
            if (currentInstanceCounter < (bellInstances.length - 1)) currentInstanceCounter++;
          }
      }, 5);
    });

    musicPlayer.addEventListener('pause', (event) => {
      clearInterval(checkedInterval);
    });

    musicPlayer.addEventListener('ended', (event) => {
      clearInterval(checkedInterval);
      onExerciseEnd(soundCaught);
    });
  });

  const controlAudio = (e) => {
    e.preventDefault();
    const yourAudio = document.getElementById('music-player');
    yourAudio.play();
  }

  const celebrate = () => {
    setShowCelebration(true);
    setInterval(function () {
      setShowCelebration(false);
    }, 1500);
  }

  return (
    <div className="App">
      <h3>Listen for the bell 🔔</h3>
      <audio
          id="music-player"
          controls
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          // src="media/bell-sample.mp3"
          style={{display: "none"}}>
        Your browser does not support the <code>audio</code> element.
      </audio>

      {isPlaying ? <i>Audio started playing...</i> : <a href="#" id="audio-control" onClick={controlAudio}>Play Audio</a>}

      { showCelebration ? <CelebrationComp /> : null }

      {/* { soundCaught.map(sc => <p key={sc.iteration}>Bell number {sc.iteration}, originally played at {sc.soundAt}, was caught within {sc.time} seconds.</p>)} */}
    </div>
  );
}
