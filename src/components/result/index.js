import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ResultComp = ({results}) => {
  const [avgReactionTime, setAvgReactionTime] = useState(0);

  useEffect(() => {
    const allTime = results.map(r => r.time).reduce((a, b) => a + b, 0);
    setAvgReactionTime((allTime/results.length).toFixed(2))
  })

  return (<div>
    <h2>Results page 📊</h2>
    <table style={{margin: "10px"}}>
      <tbody>
      <tr>
          <th>Sound Iteration</th>
          <th>Originally played at</th>
          <th>Reaction time</th>
        </tr>
        {results.map(result =>
          <tr>
            <td>{result.iteration}</td>
            <td>{result.soundAt} sec</td>
            <td>{result.time} sec</td>
          </tr>
        )}
      </tbody>
    </table>

    <table style={{margin: "10px"}}>
      <tbody>
        <tr>
          <th>Average Reaction Time</th>
          <td>{avgReactionTime} secs</td>
        </tr>
      </tbody>
    </table>
    <Link to="/">Back To Homepage &gt;&gt;</Link>
    </div>)
}