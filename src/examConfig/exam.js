const stageAConfig = (addResults) => {
  const q1Config = {
    stage: "StageA1",
    type: "question",
    mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    mp3Url2: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    correctAnswer: "same",
    onDone: (reactionTime, answerCorrect, config) => addResults({reactionTime, answerCorrect, config})
  };

  const l1Config = {
    stage: "StageA2",
    type: "listening",
    keyNote: "Rain",
    audioSrc: "https://soundbible.com/mp3/cartoon-birds-2_daniel-simion.mp3",
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
    onDone: (soundCaught, config) => addResults({soundCaught, config}),
};

  return [q1Config, l1Config];
}

const stageBConfig = (addResults) => {
  const q1Config = {
    stage: "stageB1",
    type: "question",
    mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    mp3Url2: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    correctAnswer: "same",
    onDone: (reactionTime, answerCorrect, config) => addResults({reactionTime, answerCorrect, config})
  };

  const q2Config = {
    stage: "stageB1",
    type: "question",
    mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    mp3Url2: "https://soundbible.com/mp3/cartoon-birds-2_daniel-simion.mp3",
    correctAnswer: "different",
    onDone: (reactionTime, answerCorrect, config) => addResults({reactionTime, answerCorrect, config})
  };

  const l1Config = {
    stage: "StageB2",
    type: "listening",
    keyNote: "Rain",
    audioSrc: "https://soundbible.com/mp3/cartoon-birds-2_daniel-simion.mp3",
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
    onDone: (soundCaught, config) => addResults({soundCaught, config}),
};

  return [q1Config, q2Config, l1Config];
}

const stageCConfig = (addResults) => {
  const q1Config = {
    stage: "stageC1",
    type: "question",
    mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    mp3Url2: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    correctAnswer: "same",
    onDone: (reactionTime, answerCorrect, config) => addResults({reactionTime, answerCorrect, config})
  };

  const l1Config = {
    stage: "StageC2",
    type: "listening",
    keyNote: "Rain",
    audioSrc: "https://soundbible.com/mp3/cartoon-birds-2_daniel-simion.mp3",
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
    onDone: (soundCaught, config) => addResults({soundCaught, config}),
};

  return [q1Config, l1Config];
}

const stageDConfig = (addResults) => {
  const q1Config = {
    stage: "stageD1",
    type: "question",
    mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    mp3Url2: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    correctAnswer: "same",
    onDone: (reactionTime, answerCorrect, config) => addResults({reactionTime, answerCorrect, config})
  };

  const q2Config = {
    stage: "stageD1",
    type: "question",
    mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
    mp3Url2: "https://soundbible.com/mp3/cartoon-birds-2_daniel-simion.mp3",
    correctAnswer: "different",
    onDone: (reactionTime, answerCorrect, config) => addResults({reactionTime, answerCorrect, config})
  };

  const l1Config = {
    stage: "StageD2",
    type: "listening",
    keyNote: "Rain",
    audioSrc: "https://soundbible.com/mp3/cartoon-birds-2_daniel-simion.mp3",
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
    onDone: (soundCaught, config) => addResults({soundCaught, config}),
};

  return [q1Config, q2Config, l1Config];
}

const stageA = {
  stageAConfig: (onDone) => stageAConfig(onDone),
}
const stageB = {
  stageBConfig: (onDone) => stageBConfig(onDone),
}
const stageC = {
  stageCConfig: (onDone) => stageCConfig(onDone),
}
const stageD ={
  stageDConfig: (onDone) => stageDConfig(onDone),
}

export const examConfig = {
  examName: "exam",
  stageA,
  stageB,
  stageC,
  stageD
}