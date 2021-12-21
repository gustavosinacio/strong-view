import { ReactElement, useState } from "react";

import { Container } from "./Home.styles";

export const Home = (): ReactElement => {
  const [count, setCount] = useState(0);

  const upCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Container>
      <p>
        Count: <span>{count}</span>
      </p>
      <button onClick={upCount}>Upcount</button>
    </Container>
  );
};
