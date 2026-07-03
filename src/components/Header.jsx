import { FaBars, FaBell } from "react-icons/fa";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <button className="icon-button">
        <FaBars />
      </button>

      <h2 className="logo">
        Floos<span>Track</span>
      </h2>

      <button className="icon-button">
        <FaBell />
      </button>
    </header>
  );
}