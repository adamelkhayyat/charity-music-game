import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Stage } from "../exam"

export const ResultComp = ({results}) => {
  const [questionResults, setQuestionResults] = useState([]);
  const [listeningResults, setListeningResults] = useState([]);
  const [listeningTimes, setListeningTimes] = useState([]);

  useEffect(() => {
    results.forEach(result => {
      const { exerciseType } = result;

      if (exerciseType === Stage.STAGE_A1) {
        if (!questionResults.includes(result)) {
          setQuestionResults(arr => ([...arr, result]));
        }
      } else if (exerciseType === Stage.STAGE_A2) {
        if (!listeningResults.includes(result)) {
          setListeningResults(arr => [...arr, result]);
        }
        const times = result.soundCaught.map(sc => sc.time);
        setListeningTimes(arr => [...arr, ...times]);
      }
    })
  }, [])

  return (<div>
    <h1>Results Page</h1>
    <h3>Stage A1 Results</h3>
    <hr></hr>
    <table style={{margin: "10px"}}>
      <tbody>
      <tr>
          <th>Exercise Num</th>
          <th>Stage</th>
          <th>Correct</th>
          <th>Reaction time</th>
        </tr>
        {questionResults.map((result, i) =>
          <tr key={i} >
            <td>{result.exerciseNum}</td>
            <td>{result.exerciseType}</td>
            <td style={{ "backgroundColor": result.answerCorrect ? "green" : "red", }}>{result.answerCorrect ? "✓" : "X"}</td>
            <td>{result.reactionTime.toFixed(3)} sec</td>
          </tr>
        )}
      </tbody>
    </table>

    <table style={{margin: "10px"}}>
      <tbody>
        <tr>
          <th>Average Reaction Time</th>
          <td>{(questionResults.map(r => r.reactionTime).reduce((a, b) => a + b, 0) / questionResults.length).toFixed(3)} secs</td>
        </tr>
      </tbody>
    </table>

    <h3>Stage A2 Results</h3>
    <hr></hr>
    <table style={{margin: "10px"}}>
      <tbody>
      <tr>
        <th>Exercise Num</th>
        <th>Stage</th>
        <th>Sound iteration</th>
        <th>Sound at (sec)</th>
        <th>Reaction time</th>
      </tr>
      {listeningResults.map(result =>
        <>
        {result.soundCaught.map((sr, i) => <>
          <tr key={i}>
              <td>{result.exerciseNum}.{i+1}</td>
              <td>{result.exerciseType}</td>
              <td>{sr.iteration}</td>
              <td>{sr.soundAt}</td>
              <td>{sr.time}</td>
          </tr>
        </>)}
        </>
        )}
      </tbody>
    </table>

    <table style={{margin: "10px"}}>
      <tbody>
        <tr>
          <th>Average Reaction Time</th>
          <td>{(listeningTimes.reduce((a, b) => a + b, 0) / questionResults.length).toFixed(3)} secs</td>
        </tr>
      </tbody>
    </table>
    <Link to="/">Back To Homepage &gt;&gt;</Link>
    </div>)
}