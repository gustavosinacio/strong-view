import { Link, Outlet } from "react-router-dom";
import { getTestgrounds } from "../../data";

export const Testgrounds = () => {
  let testgrounds = getTestgrounds();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
          marginRight: "1rem",
        }}
      >
        {testgrounds.map((testground) => (
          <Link
            style={{ display: "block", margin: "1rem 0", color: "white" }}
            to={`/testgrounds/${testground.id}`}
            key={testground.id}
          >
            {testground.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};
