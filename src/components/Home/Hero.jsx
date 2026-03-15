import "./Hero.css";
import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-section">
        <div className="hero-container">
          <img src="../../assets/logo.svg" alt="" />
          <h1 className="hero-title">
            KOD ACIKTIRIR <br /> PİZZA, DOYURUR
          </h1>
          <Link
            data-cy="hero-order-link"
            className="hero-order-link"
            to="/order"
          >
            ACIKTIM
          </Link>
        </div>
      </div>
    </div>
  );
}
