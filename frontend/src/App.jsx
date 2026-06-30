import { useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  const callBackend = async () => {
    const response = await fetch("/api/message");
    const result = await response.json();
    setData(result);
  };

  return (
    <main>
      <h1>TP Docker Swarm</h1>
      <p>Frontend React + Backend Express déployés avec Docker Swarm</p>

      <button onClick={callBackend}>Appeler le backend</button>

      {data && (
        <div data-testid="backend-message">
          <p>{data.message}</p>
          <p>
            Instance backend utilisée : <strong>{data.instance}</strong>
          </p>
        </div>
      )}
    </main>
  );
}
