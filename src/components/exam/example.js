
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


  const MelodyQuestions = () => (
    <>
      <h2>Voorbeeld: Melodie</h2>
      {  melodyExamples.map((example) =>
        <>
        { example.tip && <label className="exam-intro__hint"><i>{example.tip}</i></label> }
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
        <p style={{marginBottom: "0"}}>We gaan eerst even oefenen!</p>
        <p style={{color: "red"}}><b>De onderstaande audioclips zijn voorbeelden!</b></p>
        <ExampleQuestions config={config} />
      </div>
    </div>
  );
}