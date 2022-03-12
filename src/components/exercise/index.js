import { useEffect } from "react";
// import './Exercise.css';


export const ListeningComp = ({ config }) => {
  const { onExerciseEnd, bellInstances, audioSrc, keyNote } = config;
  let soundCaught;

  useEffect(() => {
    soundCaught = [];
    const musicPlayer = document.getElementById(`music-player`);

    // set up listener for space key
    const keydownSpace = (e) => {
      console.log(soundCaught);
      if (e.code === 'Space') {
        const currentPlayerTime = musicPlayer.currentTime;
        const soundHit = getSoundHit(currentPlayerTime);
        console.log(soundHit);

        if (soundHit) {
          soundCaught = soundCaught.concat(soundHit);
        }
      }
    };
    document.addEventListener('keydown', (e) => keydownSpace(e));

    // Ended listener
    const endedListener = () => {
      onExerciseEnd(soundCaught);
    }
    musicPlayer.addEventListener('ended', () => endedListener());

    return () => {
      musicPlayer.removeEventListener('ended', () => endedListener());
      document.removeEventListener('keydown', (e) => keydownSpace(e));
    }  
  }, [config]);

  const isBellCaught = (bellIteration) => soundCaught.some(sc => sc.iteration === bellIteration);

  const getSoundHit = (actionTime) => {
    let soundHit = null;

    bellInstances.forEach((bell, i) => {
      const { time } = bell;

      if (actionTime >= time) {
        const nextBell = bellInstances[i + 1];

        if (nextBell && actionTime < nextBell.time && !isBellCaught(i)) {
          soundHit = {
            iteration: i,
            soundAt: time,
            time: actionTime - time
          }
        } else if (nextBell && actionTime >= nextBell.time && !isBellCaught(i + 1)){
          soundHit = {
            iteration: i + 1,
            soundAt: nextBell.time,
            time: actionTime - nextBell.time
          }
        }
      }
    })

    return soundHit;
  }


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
          style={{display: "none"}}
          >
        Your browser does not support the <code>audio</code> element.
      </audio>

      <button id="audio-control" onClick={controlAudio}>Play Audio</button>
    </div>
  );
}
