import "./Hero.css";
import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-section">
        <div className="hero-container">
          <img src="../../images/iteration-1-images/logo.svg" alt="" />
          <h1 className="hero-title">
            KOD ACIKTIRIR <br /> PİZZA, DOYURUR
          </h1>
          <Link className="hero-order-link" to="/order">
            ACIKTIM
          </Link>
        </div>
      </div>
    </div>
  );
}
