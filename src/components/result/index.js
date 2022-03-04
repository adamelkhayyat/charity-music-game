import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ResultComp = ({results}) => {
  const [avgReactionTime, setAvgReactionTime] = useState(0);
  const [questionResults, setQuestionResults] = useState([]);
  const [listeningResults, setListeningResults] = useState([]);

  useEffect(() => {
    results.forEach(result => {
      const { exerciseType } = result;

      if (exerciseType === "question") {
        setQuestionResults(arr => [...arr, result]);
      } else if (exerciseType === "listening") {
        setListeningResults(arr => [...arr, result]);
      }
    })
  }, [])

  return (<div>
    <h1>Results Page</h1>
    <h3>Question Results</h3>
    <table style={{margin: "10px"}}>
      <tbody>
      <tr>
          <th>Exercise Num</th>
          <th>Exercise Type</th>
          <th>Correct</th>
          <th>Reaction time</th>
        </tr>
        {questionResults.map(result =>
          <tr>
            <td>{result.exerciseNum}</td>
            <td>{result.exerciseType}</td>
            <td style={{ "background-color": result.answerCorrect ? "green" : "red" }}>{result.answerCorrect ? "✓" : "X"}</td>
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

    <h3>Listening Results</h3>
    <table style={{margin: "10px"}}>
      <tbody>
      <tr>
          <th>Exercise Num</th>
          <th>Exercise Type</th>
          <th>Reaction time</th>
        </tr>
        {listeningResults.map(result =>
          <tr>
            <td>{result.exerciseNum}</td>
            <td>{result.exerciseType}</td>
          </tr>
        )}
      </tbody>
    </table>

    <table style={{margin: "10px"}}>
      <tbody>
        <tr>
          <th>Average Reaction Time</th>
          {/* <td>{(listeningResults.map(r => r.reactionTime).reduce((a, b) => a + b, 0) / questionResults.length).toFixed(3)} secs</td> */}
        </tr>
      </tbody>
    </table>
    <Link to="/">Back To Homepage &gt;&gt;</Link>
    </div>)
}