import { useEffect, useState } from "react";

export const ResultComp = ({results}) => {
  const [questionResults, setQuestionResults] = useState([]);
  const [listeningResults, setListeningResults] = useState([]);
  const [listeningTimes, setListeningTimes] = useState([]);

  useEffect(() => {
    if (results !== {}) {
      for (const [key, value] of Object.entries(results)) {
        if (key === "stageA1") {
          setQuestionResults(value);
        } else if (key === "stageA2") {
          setListeningResults(value);
        }
      }
    }
  }, [results])

  return (<div>
      <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{marginRight: "20px"}}>
          <h3 style={{marginBottom: "0", marginTop: "0"}}>Stage A1 Results</h3>
          <hr />
          <table style={{margin: "10px"}}>
          <tbody>
          <tr>
              <th>Q</th>
              <th>Correct</th>
              <th>Reaction time</th>
            </tr>
            {questionResults.map((result, i) =>
              <tr key={i} >
                <td>{result.exerciseNum}</td>
                <td style={{ "backgroundColor": result.answerCorrect ? "green" : "red", }}>{result.answerCorrect ? "✓" : "X"}</td>
                <td>{result.reactionTime.toFixed(2)} sec</td>
              </tr>
            )}
          </tbody>
        </table>

        <table style={{margin: "10px"}}>
          <tbody>
            <tr>
              <th>Average Reaction Time</th>
              <td>{(questionResults.map(r => r.reactionTime).reduce((a, b) => a + b, 0) / questionResults.length).toFixed(2)} secs</td>
            </tr>
          </tbody>
        </table>
        </div>

        <div>
            <h3 style={{marginBottom: "0", marginTop: "0"}}>Stage A2 Results</h3>
          <hr></hr>
          <table style={{margin: "10px"}}>
            <tbody>
            <tr>
              <th>Q</th>
              <th>Sound iteration</th>
              <th>Sound at (sec)</th>
              <th>Reaction time</th>
            </tr>
            {listeningResults.map(result =>
              <>
              {result.soundCaught.map((sr, i) =>
                <tr key={i}>
                    <td>{result.exerciseNum}.{i + 1}</td>
                    <td>{sr.iteration + 1}</td>
                    <td>{sr.soundAt}</td>
                    <td>{sr.time.toFixed(2)} sec</td>
                </tr>
              )}
              </>
              )}
            </tbody>
          </table>

          <table style={{margin: "10px"}}>
            <tbody>
              <tr>
                <th>Average Reaction Time</th>
                <td>{(listeningTimes.reduce((a, b) => a + b, 0) / questionResults.length).toFixed(2)} secs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>)
}