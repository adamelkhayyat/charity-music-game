import { useEffect, useRef, useState } from "react";
import { ListeningComp } from "../listening"
import { QuestionComp } from "../question";

import './Exam.css';

export const Stage = {
  STAGE_A0: "Stage A",
  STAGE_A1: "Stage A1",
  STAGE_A2: "Stage A2",
}

const ExampleQuestion = () => {
  const controlAudio = (e, num) => {
    e.preventDefault();
    document.getElementById(`test-music-player-${num}`).play();
  }

  return (
    <div className="exam-intro__example">
      <label className="exam-intro__example-label"><i><b>Example 1:</b></i></label>
      <audio
          id="test-music-player-1"
          controls
          src="https://soundbible.com/mp3/sos-morse-code_daniel-simion.mp3"
          style={{display: "none"}}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <button id="audio-control" onClick={(e) => controlAudio(e, 1)}>Play Audio 1 ▶</button>

      <audio
          id="test-music-player-2"
          controls
          src="https://soundbible.com/mp3/cartoon-birds-2_daniel-simion.mp3"
          style={{display: "none"}}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <button id="audio-control" onClick={(e) => controlAudio(e, 2)}>Play Audio 2 ▶</button>
      <label className="exam-intro__example-label-explanation">These two rhythms are the <i><u><b>different</b></u></i></label>
      <hr className="exam-intro__hr"></hr>

      <label className="exam-intro__example-label"><i><b>Example 2:</b></i></label>
      <audio
          id="test-music-player-3"
          controls
          src="https://soundbible.com/mp3/hard_shoes_1-daniel_simon.mp3"
          style={{display: "none"}}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <button id="audio-control" onClick={(e) => controlAudio(e, 3)}>Play Audio 1 ▶</button>

      <audio
          id="test-music-player-4"
          controls
          src="https://soundbible.com/mp3/hard_shoes_1-daniel_simon.mp3"
          style={{display: "none"}}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <button id="audio-control" onClick={(e) => controlAudio(e, 4)}>Play Audio 2 ▶</button>
      <label className="exam-intro__example-label-explanation">These two rhythms are the <i><u><b>same</b></u></i></label>
    </div>
  )
}

export const ExamComp = ({ onDone }) => {
  const [results, setResult] = useState([])
  const [started, setStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0);
  const [currentL, setCurrentL] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(1);
  const [currentQuestionType, setCurrentQuestionType] = useState(Stage.STAGE_A1);

  const getQuestionsConfig = () => {
    const q1Config = {
      mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
      mp3Url2: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
      correctAnswer: "same",
      onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
    };

    const q2Config = {
      mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
      mp3Url2: "https://soundbible.com/mp3/Short%20Beep%20Tone-SoundBible.com-1937840853.mp3",
      correctAnswer: "different",
      onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
    };

    const q3Config = {
      mp3Url1: "https://soundbible.com/mp3/Dying%20Robot-SoundBible.com-1721415199.mp3",
      mp3Url2: "https://soundbible.com/mp3/Dying%20Robot-SoundBible.com-1721415199.mp3",
      correctAnswer: "same",
      onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
    };

    return [q1Config, q2Config, q3Config];
  }

  const addResults = (result) => {
    console.log(currentExercise);
    const adjustedResult = {
      ...result,
      exerciseNum: currentExercise,
      exerciseType: currentQuestionType
    }

    const updatedResults = [...results, adjustedResult]
    console.log("addResults")
    console.log(updatedResults);
    setResult(updatedResults);
    nextExercise(currentQuestionType);

    if (currentExercise >= maxQuestionCount) {
      onDone(updatedResults);
    }
  }

  //audioSrc: "https://soundbible.com/mp3/heavy-rain-daniel_simon.mp3",
  // time is in seconds, so 00:24 => 24, 01:30 => 90
  const getListeningConfig = () => {
    const l1Config = {
      keyNote: "Rain",
      audioSrc: "https://soundbible.com/mp3/alien-spaceship_daniel_simion.mp3",
      bellInstances: [
        {
          time: 2,
        },
        {
          time: 5,
        },
        {
          time: 10,
        },
      ],
      onExerciseEnd: (soundCaught) => addResults({soundCaught}),
  };

    const l2Config = {
      keyNote: "Alien",
      audioSrc: "https://soundbible.com/mp3/alien-spaceship_daniel_simion.mp3",
      bellInstances: [
        {
          time: 5,
        },
        {
          time: 10,
        },
    ],
    onExerciseEnd: (soundCaught) => addResults({soundCaught}),
  };


    return [l1Config, l2Config];
  }

  const questions = getQuestionsConfig();
  const listening = getListeningConfig();
  const maxQuestionCount = questions.length + listening.length;

  const nextExercise = (type) => {
    // Stage A1 - same or diff questions
    if (type === Stage.STAGE_A1) {
      const nextQuestionIndex = currentQ + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQ(nextQuestionIndex);
      } else {
        setCurrentQuestionType(Stage.STAGE_A2);
      }
    } else {
      // Stage A2 - listening questions
      const nextListeningIndex = currentL + 1;
      if (nextListeningIndex < listening.length) {
        setCurrentL(nextListeningIndex);
      }
    }

    if (currentExercise <= maxQuestionCount) {
      setCurrentExercise(currentExercise + 1);
    } else {
      console.log("final result");
      console.log(results);
    }
  }

  return (
    <div className="exam">
    <h1 id="exam-title" >Exam</h1>
    <hr></hr>
    { !started ? (
      <div className="exam-intro">
        <label className="exam-intro__hint"><i>Click the blue tiles with ▶ to play the clips.</i></label>
        <ExampleQuestion />
        <button className="exam-intro__start-button" onClick={() => setStarted(true)}>Continue →</button>
      </div> ) : (
      <div>
        <h2>{currentQuestionType}: {currentExercise}</h2>
        { currentQuestionType === Stage.STAGE_A1 ?  <QuestionComp config={questions[currentQ]} /> : <ListeningComp config={listening[currentL]} /> }
      </div>
      )
    }
    </div>
  )
}