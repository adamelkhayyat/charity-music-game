import { v4 as uuid } from 'uuid';

const stageTutorialConfig = (addResults) => {
  const exampleQ1MConfig = {
    id: uuid(),
    type: "tutorial",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FAnswer%202.mp3?alt=media&token=586754a9-f782-45fd-90de-8115e939ce95",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FExample%202.mp3?alt=media&token=72ee139a-ffdd-4102-a56f-435984778236",
    correctAnswer: "different",
    extraType: "melody"
  };

  const exampleQ2MConfig = {
    id: uuid(),
    type: "tutorial",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FAnswer%201%20.mp3?alt=media&token=24de14c5-2bb6-4bf6-91e5-1b5ccfe7e562",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FExample%201%20.mp3?alt=media&token=ce578207-8422-4d21-b065-ad1efe6704ad",
    correctAnswer: "same",
    extraType: "melody"
  };

  const exampleQ1RConfig = {
    id: uuid(),
    type: "tutorial",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FExample%202%20(1).mp3?alt=media&token=1fddf66b-dff5-43ba-8a90-cec2b7ce21f8",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FAnswer%202%20(1).mp3?alt=media&token=0f2ca3ac-43b9-4f2c-a1ce-87e951d59317",
    correctAnswer: "different",
    extraType: "rythm"
  };

  const exampleQ2RConfig = {
    id: uuid(),
    type: "tutorial",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FAnswer%204.mp3?alt=media&token=86bb20d5-e96d-4017-8c8e-6da3fd76bca5",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FExample%204.mp3?alt=media&token=ac29db5e-629e-4787-ac5f-7b1c3ca83c12",
    correctAnswer: "same",
    extraType: "rythm"
  };

  const t1Config = {
    messageTitle: "Welkom! Wat fijn dat je er bent!",
    message: "Heb jij zin in een uitdaging? We gaan straks naar leuke muziek luisteren waar fouten in verstopt zitten. Kan jij ze allemaal vinden? We gaan eerst even oefenen, druk op de blauwe knoppen hier beneden om het voorbeeld te horen!",
    examples: [
      exampleQ1MConfig,
      exampleQ2MConfig,
      exampleQ1RConfig,
      exampleQ2RConfig,
    ],
    type: "tutorial"
  }

  // melody questions
  const q1Config = {
    title: "Testronde: Melodie 1",
    stage: "tutorial",
    type: "question",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FExample%205.mp3?alt=media&token=0a512eb5-46b3-4a4c-9e92-d16459ec10f2",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FAnswer%205.mp3?alt=media&token=1a3b9d03-c26d-4592-a4e2-f5bc3344c4b4",
    correctAnswer: "different",
    onDone: (reactionTime, answerCorrect, config) => addResults({reactionTime, answerCorrect, config})
  };

  const q2Config = {
    title: "Testronde: Melodie 2",
    stage: "tutorial",
    type: "question",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FAnswer%208.mp3?alt=media&token=374083d6-1453-4176-88a4-1a5034a4f5bd",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FAnswer%208.mp3?alt=media&token=374083d6-1453-4176-88a4-1a5034a4f5bd",
    correctAnswer: "same",
    onDone: (reactionTime, answerCorrect, config) => addResults({reactionTime, answerCorrect, config})
  };

  const q3Config = {
    title: "Testronde: Melodie 3",
    stage: "tutorial",
    type: "question",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FAnswer%2011.mp3?alt=media&token=4a871ca9-0585-4a38-8bed-b7cc3b78c146",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FAnswer%2011.mp3?alt=media&token=4a871ca9-0585-4a38-8bed-b7cc3b78c146",
    correctAnswer: "same",
    onDone: (reactionTime, answerCorrect, config) => addResults({reactionTime, answerCorrect, config})
  };

  const q4Config = {
    title: "Testronde: Melodie 4",
    stage: "tutorial",
    type: "question",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FExample%2012.mp3?alt=media&token=504e1e84-2464-423c-a8c3-7a60025f1ce6",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FAnswer%2012.mp3?alt=media&token=5e4dc16f-dd20-432f-b371-ee32f1faa27d",
    correctAnswer: "different",
    onDone: (reactionTime, answerCorrect, config) => addResults({reactionTime, answerCorrect, config})
  };

  // melody questions
  const q5Config = {
    title: "Testronde: Ritme 1",
    stage: "tutorial",
    type: "question",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FAnswer%203.mp3?alt=media&token=25e69118-bac2-4bf8-b4c1-81e6c03c691d",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FExample%203.mp3?alt=media&token=f120de0d-7005-4b17-850c-1d27e3cf199b",
    correctAnswer: "different",
    onDone: (reactionTime, answerCorrect, config) => addResults({reactionTime, answerCorrect, config})
  };

  const q6Config = {
    title: "Testronde: Ritme 2",
    stage: "tutorial",
    type: "question",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FExample%206.mp3?alt=media&token=2656ece8-e9fb-4618-866d-b481b36efb0b",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FAnswer%206.mp3?alt=media&token=463ec863-5f0b-436b-89c9-0a5f98392444",
    correctAnswer: "different",
    onDone: (reactionTime, answerCorrect, config) => addResults({reactionTime, answerCorrect, config})
  };

  const q7Config = {
    title: "Testronde: Ritme 3",
    stage: "tutorial",
    type: "question",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FExample%209.mp3?alt=media&token=1019ca54-a7b3-4f0c-a84e-c38ffea1910b",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FExample%209.mp3?alt=media&token=1019ca54-a7b3-4f0c-a84e-c38ffea1910b",
    correctAnswer: "same",
    onDone: (reactionTime, answerCorrect, config) => addResults({reactionTime, answerCorrect, config})
  };

  const q8Config = {
    title: "Testronde: Ritme 4",
    stage: "tutorial",
    type: "question",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FExample%2014.mp3?alt=media&token=0d5d9056-981b-43d4-bda3-383c4b2dfff7",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FAnswer%2014.mp3?alt=media&token=d69d6bb9-0886-4331-b0c6-9d951db556b5",
    correctAnswer: "different",
    onDone: (reactionTime, answerCorrect, config) => addResults({reactionTime, answerCorrect, config})
  };

  const m1Config = {
    stage: "tutorial",
    type: "message",
    topContent: "Nu gaan we echt beginnen!",
    mainContent: "We gaan naar verschillende stukken muziek luisteren. Hoe verder je komt, hoe vetter en leuker de muziek wordt! Je krijgt verschillende uitdagingen; je gaat	namelijk op zoek naar gekke fouten in de muziek. Soms klinkt een toon/noot heel raar en soms is de toon/noot er helemaal niet. Kan jij ze allemaal vinden?",
    secondaryContent: "Je krijg overal eerst een voorbeeld te horen! Hierin kun je stiekem al luisteren hoe de muziek zal klinken. Daarna ga je door naar de echte uitdaging!",
    bottomContent: "Heel veel succes!"
  };

  return [t1Config, q1Config, q2Config, q3Config, q4Config, q5Config, q6Config, q7Config, q8Config, m1Config];
}

const stageAConfig = (addResults) => {
  const exampleQ1MConfig = {
    id: uuid(),
    type: "tutorial",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage%20A1%20-%20Example%20v1%20(1).mp3?alt=media&token=9dc2ad05-b9c1-4670-a2e6-b7d6e6a1e2fb",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage%20A1%20-%20Example%20wrong%20v1.mp3?alt=media&token=cb4632e4-1374-4376-a009-16e2e899df84",
    correctAnswer: "different",
    extraType: "melody",
    extraSoundText: "Klik hieronder voor het geluid van de tamboerijn:",
    extraSound: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FTamboerijn%20(1).mp3?alt=media&token=886746d0-a5e1-42fb-b06f-82d9516b634e"
  };

  const t1Config = {
    messageTitle: "Luister naar de voorbeelden hieronder.",
    messageTip: "Dit kan je zo vaak afspelen als je zelf wil!",
    message: "Op de volgende pagina ga je luisteren naar een stuk muziek. Hierin moet je goed opletten op het piano geluid, de piano gaat namelijk fouten maken, ze lijken een beetje op de voorbeelden hieronder. Je hoort in uitdaging 1 eerst een stukje met een voorbeeld van een piano. Als je de tamboerijn hoort dan is het voorbeeld klaar. Als je de piano opnieuw hoort dan is dat de uitdaging, daarin zitten fouten totdat je de tamboerijn opnieuw hoort!",
    examples: [
      exampleQ1MConfig,
    ],
    type: "tutorial"
  }

  const l1Config = {
    stage: "Uitdaging 1: Melodie",
    type: "listening",
    title: "Uitdaging 1: Melodie",
    audioSrc: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage%20A%20-%20melody%20exam.mp3?alt=media&token=1e256ec8-0904-4c2c-82f6-f84083a3a83d",
    // audioSrc: "https://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3",
    message: "Luister ALLEEN naar de piano. Als je een fout hoort druk je zo snel mogelijk op de spatiebalk! Let op, in de drums zitten ook fouten, probeer die te negeren! Dus alleen op de spatiebalk drukken als de piano een fout maakt!!!",
    tip: "Tip: Als je de tamboerijn hoort dan is het voorbeeld klaar. Als je de piano opnieuw hoort dan is dat de uitdaging, daarin zitten fouten totdat je de tamboerijn opnieuw hoort!",
    bellInstances: [
      {
        time: 31,
      },
      {
        time: 43,
      },
      {
        time: 54,
      },
      {
        time: 90,
      },
      {
        time: 94,
      },
    ],
    onDone: (soundCaught, config) => addResults({soundCaught, config}),
  };

  const exampleQ1RConfig = {
    id: uuid(),
    type: "tutorial",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage_A1_040422_clean.mp3?alt=media&token=97971a22-1168-4fa7-9b43-107aa3d672ca",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage_A1_040422_deviant.mp3?alt=media&token=bec9ddf3-1637-4a9c-ad90-7ffe37abfb01",
    correctAnswer: "different",
    extraType: "rythm"
  };

  const t2Config = {
    messageTitle: "Goed gedaan! Nu gaan we aan de slag met ritme.",
    messageTip: "Let op! Je hoort maar 1 rondje drum, zonder pauze of tamboerijn. Hierna beginnen gelijk de fouten! Succes!",
    message: "Nu gaan we aan de slag met ritme. Je krijgt dezelfde opdracht maar nu moet je je focussen op de drumpartij. Luister hieronder naar het voorbeeld. Kan jij de fout vinden? In de uitdaging op de volgende pagina, hoor je dus een drumstel en een basgitaar. In beiden partijen zullen er fouten zitten. Focus je alleen op de drum!",
    examples: [
      exampleQ1RConfig,
    ],
    type: "tutorial"
  }

  const l2Config = {
    stage: "Uitdaging 1: Ritme",
    type: "listening",
    title: "Uitdaging 1: Ritme",
    audioSrc: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage_A1_040422_clean.mp3?alt=media&token=97971a22-1168-4fa7-9b43-107aa3d672ca",
    // audioSrc: "https://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3",
    message: "Let alleen op de drumpartij! In deze partij zitten fouten waar je op moet reageren. Negeer alle andere geluiden en fouten van de andere partij!",
    tip: "Let op: Je hoort maar 1 rondje drum, zonder pauze of tamboerijn. Hierna beginnen gelijk de fouten! Druk zo snel mogelijk op de spatiebalk als je een fout in de drums hoort!",
    bellInstances: [
      {
        time: 12,
      },
      {
        time: 18,
      },
      {
        time: 22,
      },
      {
        time: 36,
      },
      {
        time: 47,
      },
      {
        time: 56,
      },
      {
        time: 66,
      },
      {
        time: 75,
      },
      {
        time: 103,
      },
    ],
    onDone: (soundCaught, config) => addResults({soundCaught, config}),
  };

  return [t1Config, l1Config, t2Config, l2Config];
}

const stageBConfig = (addResults) => {
  const exampleQ1MConfig = {
    id: uuid(),
    type: "tutorial",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage%20B%20-%20Example%20v1.mp3?alt=media&token=ac576e8f-6183-4bb2-88f0-36a060e9fdf6",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage%20B%20-%20Example%20wrong%20v1.mp3?alt=media&token=4c4bc22e-7805-489b-81fe-ad34e3bbcabb",
    correctAnswer: "different",
    extraType: "melody"
  };

  const t1Config = {
    messageTitle: "Er komt nu een instrument bij!",
    messageTip: "Let op: dit kan je zo vaak afspelen als je zelf wil",
    message: "Luister eerst naar de voorbeelden hieronder.",
    examples: [
      exampleQ1MConfig,
    ],
    type: "tutorial"
  }

  const l1Config = {
    stage: "Uitdaging 2: Melodie",
    type: "listening",
    title: "Uitdaging 2: Melodie",
    audioSrc: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage%20B%20-%20Melody%20exam.mp3?alt=media&token=2eeb87cd-0b1e-4f3f-933f-97c26fe43d87",
    // audioSrc: "https://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3",
    message: "Luister ALLEEN naar de piano. Als je een fout hoort druk je zo snel mogelijk op de spatiebalk! Let op, in de drums zitten ook fouten, probeer die te negeren! Dus alleen op de spatiebalk drukken als de piano een fout maakt!!!",
    topTip: "Tip: Als je de tamboerijn hoort dan is het voorbeeld klaar. Als je de piano opnieuw hoort dan is dat de uitdaging, daarin zitten fouten totdat je de tamboerijn opnieuw hoort!",
    bellInstances: [
      {
        time: 33,
      },
      {
        time: 40,
      },
      {
        time: 47,
      },
      {
        time: 97,
      },
      {
        time: 103,
      },
    ],
    onDone: (soundCaught, config) => addResults({soundCaught, config}),
  };

  const exampleQ1RConfig = {
    id: uuid(),
    type: "tutorial",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage_B1_040422_clean.mp3?alt=media&token=76ee1c36-b405-4ff5-957d-8bb3a6a4ec9b",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage_B1_040422_deviant.mp3?alt=media&token=735899c7-f18d-4eac-b904-8f065ae87d11",
    correctAnswer: "different",
    extraType: "rythm"
  };

  const t2Config = {
    messageTitle: "Tijd voor een nieuw een instrument!",
    message: "Let alleen op de drums en negeer de andere partijen.",
    examples: [
      exampleQ1RConfig,
    ],
    type: "tutorial"
  }

  const l2Config = {
    stage: "Uitdaging 2: Ritme",
    type: "listening",
    title: "Uitdaging 2: Ritme",
    audioSrc: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FA2%20-%20exam%20rhythm.mp3?alt=media&token=9a7d286d-072e-4ffd-af7f-894d4d5b0ccb",
    // audioSrc: "https://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3",
    topTip: "Let op! Je hoort maar 1 rondje drum, zonder pauze of tamboerijn. Hierna beginnen gelijk de fouten! Druk zo snel mogelijk op de spatiebalk als je een fout in de drums hoort!",
    bellInstances: [
      {
        time: 13,
      },
      {
        time: 24,
      },
      {
        time: 32,
      },
      {
        time: 40,
      },
      {
        time: 57,
      },
      {
        time: 62,
      },
    ],
    onDone: (soundCaught, config) => addResults({soundCaught, config}),
  };

  return [t1Config, l1Config, t2Config, l2Config];
}

const stageCConfig = (addResults) => {
  const exampleQ1MConfig = {
    id: uuid(),
    type: "tutorial",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FC1%20-%20Example%20v1.mp3?alt=media&token=939fdb09-6a05-4332-8ba1-08fb2cf449d9",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FC1%20-%20Example%20wrong%20v1.mp3?alt=media&token=126f352b-e558-490b-88f5-87479e9432b0",
    correctAnswer: "different",
    extraType: "melody"
  };

  const t1Config = {
    messageTitle: "Er komt nu een instrument bij!",
    messageTip: "Let op: dit kan je zo vaak afspelen als je zelf wil",
    message: "Luister eerst naar de voorbeelden hieronder.",
    examples: [
      exampleQ1MConfig,
    ],
    type: "tutorial"
  }

  const l1Config = {
    stage: "Uitdaging 3: Melodie",
    type: "listening",
    title: "Uitdaging 3: Melodie",
    audioSrc: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage%20C%20-%20melody%20exam.mp3?alt=media&token=5c74ad28-dd57-482a-83c9-012dce6b02ed",
    // audioSrc: "https://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3",
    message: "Luister ALLEEN naar de piano. Als je een fout hoort druk je zo snel mogelijk op de spatiebalk! Let op, in de drums zitten ook fouten, probeer die te negeren! Dus alleen op de spatiebalk drukken als de piano een fout maakt!!!",
    topTip: "Tip: Als je de tamboerijn hoort dan is het voorbeeld klaar. Als je de piano opnieuw hoort dan is dat de uitdaging, daarin zitten fouten totdat je de tamboerijn opnieuw hoort!",
    bellInstances: [
      {
        time: 31,
      },
      {
        time: 39,
      },
      {
        time: 47,
      },
      {
        time: 80,
      },
      {
        time: 87,
      },
      {
        time: 93,
      },
    ],
    onDone: (soundCaught, config) => addResults({soundCaught, config}),
  };

  const exampleQ1RConfig = {
    id: uuid(),
    type: "tutorial",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage_C1_040422_clean.mp3?alt=media&token=8f1ff36d-8d5d-46d5-893a-ac68200880f4",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage_C1_040422_deviant.mp3?alt=media&token=d49aa1c2-672f-4b28-99c0-41862404e5f5",
    correctAnswer: "different",
    extraType: "rythm"
  };

  const t2Config = {
    messageTitle: "Tijd voor een nieuw een instrument!",
    message: "Let alleen op de drums en negeer de andere partijen.",
    examples: [
      exampleQ1RConfig,
    ],
    type: "tutorial"
  }

  const l2Config = {
    stage: "Uitdaging 3: Ritme",
    type: "listening",
    title: "Uitdaging 3: Ritme",
    audioSrc: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FC2%20-%20exam%20rhythm.mp3?alt=media&token=3d98ddf1-1d66-465c-87f6-c90f1b90b5be",
    // audioSrc: "https://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3",
    topTip: "Let op! Je hoort maar 1 rondje drum, zonder pauze of tamboerijn. Hierna beginnen gelijk de fouten! Druk zo snel mogelijk op de spatiebalk als je een fout in de drums hoort!",
    bellInstances: [
      {
        time: 23,
      },
      {
        time: 35,
      },
      {
        time: 43,
      },
      {
        time: 51,
      },
      {
        time: 60,
      },
      {
        time: 72,
      },
      {
        time: 83,
      },
    ],
    onDone: (soundCaught, config) => addResults({soundCaught, config}),
  };

  return [t1Config, l1Config, t2Config, l2Config];
}

const stageDConfig = (addResults) => {
  const exampleQ1MConfig = {
    id: uuid(),
    type: "tutorial",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FD1%20-%20good.mp3?alt=media&token=8a1d126b-5012-43da-9ed1-6270602a4932",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FD1%20-%20wrong.mp3?alt=media&token=69ac0992-a685-4835-9b70-214e167e5d71",
    correctAnswer: "different",
    extraType: "melody",
  };

  const t1Config = {
    messageTitle: "Er komt nu een instrument bij!",
    messageTip: "Let op: dit kan je zo vaak afspelen als je zelf wil",
    message: "Luister eerst naar de voorbeelden hieronder.",
    examples: [
      exampleQ1MConfig,
    ],
    type: "tutorial"
  }

  const l1Config = {
    stage: "Uitdaging 4: Melodie",
    type: "listening",
    title: "Uitdaging 4: Melodie",
    audioSrc: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage%20D%20-%20Melody%20exam.mp3?alt=media&token=80c7d36c-e8cd-4f45-9c03-7866ac3b8d61",
    // audioSrc: "https://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3",
    message: "Luister ALLEEN naar de piano. Als je een fout hoort druk je zo snel mogelijk op de spatiebalk! Let op, in de drums zitten ook fouten, probeer die te negeren! Dus alleen op de spatiebalk drukken als de piano een fout maakt!!!",
    topTip: "Let op: Dit kan je maar 1 keer afspelen! Als je de tamboerijn hoort dan is het voorbeeld klaar. Als je de piano opnieuw hoort dan is dat de uitdaging, daarin zitten fouten totdat je de tamboerijn opnieuw hoort!",
    bellInstances: [
      {
        time: 28,
      },
      {
        time: 38,
      },
      {
        time: 75,
      },
      {
        time: 77,
      },
      {
        time: 82,
      },
    ],
    onDone: (soundCaught, config) => addResults({soundCaught, config}),
  };

  const exampleQ1RConfig = {
    id: uuid(),
    type: "tutorial",
    mp3Url1: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage_D1_040422_clean.mp3?alt=media&token=95795a09-fb9d-4ee4-867b-bc9acc61b0bf",
    mp3Url2: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage_D1_040422_deviant.mp3?alt=media&token=1a3f7b21-44a0-4696-b326-7204f420ab8a",
    correctAnswer: "different",
    extraType: "rythm"
  };

  const t2Config = {
    messageTitle: "Ben je klaar om er weer een nieuw een instrument aan toe te voegen?",
    message: "Let alleen op de drums en negeer de andere partijen.",
    examples: [
      exampleQ1RConfig,
    ],
    type: "tutorial"
  }

  const l2Config = {
    stage: "Uitdaging 4: Ritme",
    type: "listening",
    title: "Uitdaging 4: Ritme",
    audioSrc: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FD2%20-%20exam%20rhythm.mp3?alt=media&token=0c2762c2-9910-477e-a548-d80c6680044e",
    // audioSrc: "https://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3",
    message: "Let alleen op de drumpartij! In deze partij zitten fouten waar je op moet reageren. Negeer alle andere geluiden en fouten van de andere partij!",
    topTip: "Je hoort maar 1 rondje drum, zonder pauze of tamboerijn. Hierna beginnen gelijk de fouten! Druk zo snel mogelijk op de spatiebalk als je een fout in de drums hoort!",
    bellInstances: [
      {
        time: 20,
      },
      {
        time: 35,
      },
      {
        time: 47,
      },
      {
        time: 62,
      },
      {
        time: 73,
      },
      {
        time: 84,
      },
      {
        time: 98,
      },
    ],
    onDone: (soundCaught, config) => addResults({soundCaught, config}),
  };

  return [t1Config, l1Config, t2Config, l2Config];
}

const stageTutorial = {
  stageTutorialConfig: (onDone) => stageTutorialConfig(onDone),
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
  stageTutorial,
  stageA,
  stageB,
  stageC,
  stageD
}