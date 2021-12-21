import { Button } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Link } from "./App.styles";

export function App() {
  return (
    <div style={{}}>
      <h1 style={{ marginLeft: "20px" }}>Strong View</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <div style={{ marginLeft: "20px" }}>
          <Link to="/home">
            <Button variant="outlined">Home</Button>
          </Link>
          <Link to="/about">
            <Button variant="outlined">About</Button>
          </Link>
          <Link to="/testgrounds">
            <Button variant="outlined">Testgrounds</Button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
