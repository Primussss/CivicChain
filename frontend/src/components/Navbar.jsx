import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        background: "#E34234",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "20px"
      }}
    >
      <Link style={{ color: "white" }} to="/">Home</Link>
      <Link style={{ color: "white" }} to="/register">Register</Link>
      <Link style={{ color: "white" }} to="/login">Login</Link>
      <Link style={{ color: "white" }} to="/dates">Dates</Link>
      <Link style={{ color: "white" }} to="/notice">Notice</Link>
      <Link style={{ color: "white" }} to="/about">About</Link>
    </div>
  );
}
