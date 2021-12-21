import { Outlet, Link } from "react-router-dom";

import { getTestgrounds } from "./data";

export function App() {
  const testgrounds = getTestgrounds();

  return (
    <div style={{ padding: "10px 20px" }}>
      <h1>Strong View</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/testgrounds">Testground</Link>
      </nav>
      <Outlet />
    </div>
  );
}
