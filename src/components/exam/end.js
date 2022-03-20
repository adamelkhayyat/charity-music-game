
// comps
import { HeaderComp } from "../header";

// navigation
import { Link } from "react-router-dom";

import './Exam.css';

export const EndComp = () => {
  return (
    <div className="exam">
      <HeaderComp />
      <hr />
      <div className="exam-end">
        <div className="exam-end-message">
          Goed gedaan!
          <img id="exam-end-img" src={process.env.PUBLIC_URL + '/media/confetti-gif.webp'} alt="confetti-gif"/>
        </div>
        <Link to="/exam">
          <button id="exam-repeat-btn">Examen Herhalen</button>
        </Link>
      </div>
    </div>
  )
}