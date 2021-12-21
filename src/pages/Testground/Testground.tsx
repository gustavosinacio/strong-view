import { useParams } from "react-router-dom";

export const Testground = () => {
  const params = useParams();
  const user = null;

  return (
    <div>
      <h2>Testground {params.groundId}</h2>
      <h2>{user.name}</h2>
    </div>
  );
};
