import "./OrderPageHeader.css";
import { NavLink } from "react-router";

export default function OrderPageHeader() {
  return (
    <>
      <div className="op-header-wrapper">
        <img src="../../images/iteration-1-images/logo.svg" alt="" />
        <div className="op-header-nav-wrapper">
          <NavLink
            className="op-header-nav"
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              opacity: isActive ? 1 : 0.7,
            })}
          >
            Ana Sayfa
          </NavLink>
          <span style={{ color: "white" }}>-</span>
          <NavLink
            className="op-header-nav"
            to="/order"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              opacity: isActive ? 1 : 0.7,
            })}
          >
            Sipariş Oluştur
          </NavLink>
        </div>
      </div>
    </>
  );
}
