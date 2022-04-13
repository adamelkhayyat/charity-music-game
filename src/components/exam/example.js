
// comps
import { QuestionComp } from "../question";

const ExampleQuestions = ({ config }) => {
  if (!config) {
    return <></>;
  }

  const { examples } = config;

  const melodyExamples = [];
  const rythmExamples = [];

  examples.forEach(example => {
    if (example && !example.extraType) return;
      
    if (example.extraType === "melody") {
      melodyExamples.push(example);
    } else if (example.extraType === "rythm") {
      rythmExamples.push(example);
    }
  })


  const controlAudio = (e) => {
    e.preventDefault();
    document.getElementById(`music-player-example-sound`).play();
  }

  const ExtraSoundComp = ({ mp3Url }) => {
    return (
      <>
        <audio
        id={`music-player-example-sound`}
        controls
        src={mp3Url}
        style={{display: "none"}}>
          Your browser does not support the <code>audio</code> element.
        </audio>
        <button id="audio-control" style={{marginLeft: "5px", height: "30px", fontSize: "15px", padding: "0", width: "50px"}} onClick={(e) => controlAudio(e)}>▶</button>
      </>
    );
  }

  const MelodyQuestions = () => (
    <>
      <h2>Voorbeeld: Melodie</h2>
      {  melodyExamples.map((example) =>
        <>
        { example.tip && <label className="exam-intro__hint"><i>{example.tip}</i></label> }
        { example.extraSound &&  (
          <div style={{display: "flex", flexDirection: "row", flexFlow: "row"}}>
            <p>{example.extraSoundText}</p>
            <ExtraSoundComp mp3Url={example.extraSound}/>
          </div>
         ) }
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <QuestionComp config={example} hasButtons={false} hasTitle={false} />
            <label>Deze twee audioclips zijn <i><u>{ example.correctAnswer === "different" ? "verschillend" : "hetzelfde" }</u></i>.</label>
        </div>
        </>
      )}
    </>
  );

  const RythmQuestions = () => (
    <>
      <h2>Voorbeeld: Ritme</h2>
      { rythmExamples.map((example) =>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          <QuestionComp config={example} hasButtons={false} hasTitle={false}/>
          <label>Deze twee audioclips zijn <i><u>{ example.correctAnswer === "different" ? "verschillend" : "hetzelfde" }</u></i>.</label>
        </div>
       ) }
    </>
  );

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      { (melodyExamples.length > 0) && <MelodyQuestions /> }
      { (rythmExamples.length > 0) && <RythmQuestions /> }
    </div>
  )
}

export const IntroductionComp = ({ config }) => {
  return (
    <div className="landing-page">
      <div className="exam-intro">
        { config.messageTitle && <h3>{config.messageTitle}</h3> }
        { config.message && <p>{config.message}</p> }
        { config.messageTip && <label className="exam-intro__hint"><i>{config.messageTip}</i></label> }
        <p style={{color: "red"}}><b>De onderstaande audioclips zijn voorbeelden!</b></p>
        <ExampleQuestions config={config} />
      </div>
    </div>
  );
}