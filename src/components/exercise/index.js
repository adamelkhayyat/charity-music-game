import { useEffect, useState } from "react";
// import './Exercise.css';


export const ListeningComp = ({ config }) => {
  const { onExerciseEnd, bellInstances, audioSrc, keyNote } = config
  
  const [soundCaught, setSoundCaught] = useState([]);
  
  useEffect(() => {
    let currentInstanceCounter = 0;
    let checkedInterval = null;
    let startTime = null;
    let endTime = null;
    const musicPlayer = document.getElementById(`music-player`);

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

        // remove dup
        setSoundCaught(arr => [...new Set([...arr, state])])

        // reset timers
        startTime = null;
        endTime = null;
      }
    })

    musicPlayer.addEventListener('play', (e) => {
      e.preventDefault();

      // start measuring...
      checkedInterval = setInterval(function () {
          // check if we're reaching a point in the music where a special sound is played
          if (bellInstances[currentInstanceCounter] && bellInstances[currentInstanceCounter].time.toFixed(2) === musicPlayer.currentTime.toFixed(2)) {
            // start timer to calculate response time
            startTime = new Date().getTime();

            // move on to next (possible) special sound to look out for
            if (currentInstanceCounter < bellInstances.length) currentInstanceCounter++;
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
  }, [bellInstances, config, onExerciseEnd, soundCaught]);

  const controlAudio = (e) => {
    e.preventDefault();
    const yourAudio = document.getElementById(`music-player`);
    yourAudio.play();
  }

  return (
    <div>
      <h3>Listen for the <i><u>{keyNote}</u></i></h3>
      <audio
          id={`music-player`}
          controls
          src={audioSrc}
          style={{display: "none"}}>
        Your browser does not support the <code>audio</code> element.
      </audio>

      <button id="audio-control" onClick={controlAudio}>Play Audio</button>

      { soundCaught.map(sc => <p key={sc.iteration}>Bell number {sc.iteration}, originally played at {sc.soundAt}, was caught within {sc.time} seconds.</p>)}
    </div>
  );
}
