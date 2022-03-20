const stageA1Config = (addResults) => {
  const q1Config = {
    mp3Url1: "https://soundbible.com/mp3/soundbible-person-whistling-at-girl-daniel_simon.mp3",
    mp3Url2: "https://soundbible.com/mp3/soundbible-person-whistling-at-girl-daniel_simon.mp3",
    correctAnswer: "same",
    onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
  };

  return [q1Config];
}

//audioSrc: "https://soundbible.com/mp3/heavy-rain-daniel_simon.mp3",
// time is in seconds, so 00:24 => 24, 01:30 => 90
const stageA2Config = (addResults) => {
  const l1Config = {
    keyNote: "Rain",
    audioSrc: "https://soundbible.com/mp3/Short%20Beep%20Tone-SoundBible.com-1937840853.mp3",
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

  return [l1Config];
}

export const examDConfig = {
  examName: "stageD",
  stageA1Config: (onDone) => stageA1Config(onDone),
  stageA2Config: (onDone) => stageA2Config(onDone),
}