import { useParams } from "react-router-dom";

export const Testground = () => {
  const params = useParams();
  return (
    <div>
      <h2>Testground {params.groundId}</h2>
    </div>
  );
};
