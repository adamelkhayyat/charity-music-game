// comps
import { HeaderComp } from "../header";

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
      </div>
    </div>
  )
}