import { useEffect, useRef } from "react";
// import './Listening.css';

export const ListeningComp = ({ config }) => {
  const configuration = useRef(config);
  const soundCaught = useRef([]);

  // set up listener for space key
  const keydownSpace = (e) => {
    const musicPlayer = document.getElementById(`music-player`);

    if (e.code === 'Space') {
      const soundHit = getSoundHit(musicPlayer.currentTime);

      if (soundHit) {
        soundCaught.current = [...soundCaught.current, soundHit];
      }
    }
  };

  // Ended listener
  const endedListener = () => {
    configuration.current.onExerciseEnd(soundCaught.current);
  }

  useEffect(() => {
    configuration.current = config;
    soundCaught.current = [];
    const musicPlayer = document.getElementById(`music-player`);
    document.addEventListener('keydown', keydownSpace);
    musicPlayer.addEventListener('ended', () => endedListener());

    return () => {
      window.removeEventListener("keydown", keydownSpace);
      musicPlayer.removeEventListener('ended', endedListener);
    }
  }, []);

  useEffect(() => {
    configuration.current = config;
    soundCaught.current = [];
  }, [config]);


  const isBellCaught = (bellIteration) => soundCaught.current.some(sc => sc.iteration === bellIteration);

  const getSoundHit = (actionTime) => {
    const { bellInstances } = configuration.current;
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
      <h3>Listen for the <i><u>{configuration.current.keyNote}</u></i></h3>
      <audio
          id={`music-player`}
          controls
          src={configuration.current.audioSrc}
          // style={{display: "none"}}
          >
        Your browser does not support the <code>audio</code> element.
      </audio>

      <button id="audio-control" onClick={controlAudio}>Play Audio ▶</button>
    </div>
  );
}
