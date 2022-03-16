import { Link } from "react-router-dom";

import './Header.css';

export const HeaderComp = () => {
  return (
    <div className="header">
      <h1 id="header-title">ToonTwist</h1>
      <Link to="/">
      <img className="toon-twist-logo__side" src={process.env.PUBLIC_URL + '/media/toontwist-logo.png'} alt="toon-twist-logo"/>
      </Link>
    </div>
  )
}