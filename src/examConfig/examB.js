const stageAConfig = (addResults) => {
  const q1Config = {
    stage: "StageA1",
    type: "listening",
    mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    mp3Url2: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    correctAnswer: "same",
    onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
  };

  const q2Config = {
    stage: "StageA1",
    type: "listening",
    mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    mp3Url2: "https://soundbible.com/mp3/Short%20Beep%20Tone-SoundBible.com-1937840853.mp3",
    correctAnswer: "different",
    onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
  };

  const q3Config = {
    stage: "StageA1",
    type: "listening",
    mp3Url1: "https://soundbible.com/mp3/Dying%20Robot-SoundBible.com-1721415199.mp3",
    mp3Url2: "https://soundbible.com/mp3/Dying%20Robot-SoundBible.com-1721415199.mp3",
    correctAnswer: "same",
    onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
  };

  const l1Config = {
    stage: "StageA2",
    type: "listening",
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
    onDone: (soundCaught) => addResults({soundCaught}),
};

  const l2Config = {
    stage: "StageA2",
    type: "listening",
    keyNote: "Alien",
    audioSrc: "https://soundbible.com/mp3/Short%20Beep%20Tone-SoundBible.com-1937840853.mp3",
    bellInstances: [
      {
        time: 5,
      },
      {
        time: 10,
      },
  ],
  onDone: (soundCaught) => addResults({soundCaught}),
};


  return [q1Config, q2Config, q3Config, l1Config, l2Config];
}

const stageBConfig = (addResults) => {
  const q1Config = {
    stage: "stageB1",
    type: "listening",
    mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    mp3Url2: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    correctAnswer: "same",
    onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
  };

  const q2Config = {
    stage: "stageB1",
    type: "listening",
    mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    mp3Url2: "https://soundbible.com/mp3/Short%20Beep%20Tone-SoundBible.com-1937840853.mp3",
    correctAnswer: "different",
    onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
  };

  const q3Config = {
    stage: "StageB1",
    type: "listening",
    mp3Url1: "https://soundbible.com/mp3/Dying%20Robot-SoundBible.com-1721415199.mp3",
    mp3Url2: "https://soundbible.com/mp3/Dying%20Robot-SoundBible.com-1721415199.mp3",
    correctAnswer: "same",
    onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
  };

  const l1Config = {
    stage: "StageB2",
    type: "listening",
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
    onDone: (soundCaught) => addResults({soundCaught}),
};

  return [q1Config, q2Config, q3Config, l1Config];
}

const stageCConfig = (addResults) => {
  const q1Config = {
    stage: "stageC1",
    type: "listening",
    mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    mp3Url2: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    correctAnswer: "same",
    onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
  };

  const q2Config = {
    stage: "stageC1",
    type: "listening",
    mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    mp3Url2: "https://soundbible.com/mp3/Short%20Beep%20Tone-SoundBible.com-1937840853.mp3",
    correctAnswer: "different",
    onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
  };

  const q3Config = {
    stage: "StageC1",
    type: "listening",
    mp3Url1: "https://soundbible.com/mp3/Dying%20Robot-SoundBible.com-1721415199.mp3",
    mp3Url2: "https://soundbible.com/mp3/Dying%20Robot-SoundBible.com-1721415199.mp3",
    correctAnswer: "same",
    onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
  };

  const l1Config = {
    stage: "StageC2",
    type: "listening",
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
    onDone: (soundCaught) => addResults({soundCaught}),
};

  return [q1Config, q2Config, q3Config, l1Config];
}

const stageDConfig = (addResults) => {
  const q1Config = {
    stage: "stageD1",
    type: "listening",
    mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    mp3Url2: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    correctAnswer: "same",
    onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
  };

  const q2Config = {
    stage: "stageD1",
    type: "listening",
    mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    mp3Url2: "https://soundbible.com/mp3/Short%20Beep%20Tone-SoundBible.com-1937840853.mp3",
    correctAnswer: "different",
    onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
  };

  const l1Config = {
    stage: "StageD2",
    type: "listening",
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
    onDone: (soundCaught) => addResults({soundCaught}),
};

  return [q1Config, q2Config, l1Config];
}

export const examBConfig = {
  examName: "rythmExam",
  stageAConfig,
  stageBConfig,
  stageCConfig,
  stageDConfig,
}

/**
 * 
  stageA: (onDone) => stageAConfig(onDone),
  stageB: (onDone) => stageBConfig(onDone),
  stageC: (onDone) => stageCConfig(onDone),
  stageD: (onDone) => stageDConfig(onDone),
 */