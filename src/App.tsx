import { Outlet, Link } from "react-router-dom";

export function App() {
  return (
    <div>
      <h1 style={{ marginLeft: "20px" }}>Strong View</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <div style={{ marginLeft: "20px" }}>
          <Link style={{ color: "white" }} to="/home">
            Home
          </Link>{" "}
          |{" "}
          <Link style={{ color: "white" }} to="/about">
            About
          </Link>{" "}
          |{" "}
          <Link style={{ color: "white" }} to="/testgrounds">
            Testgrounds
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
