import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  const callBackend = async () => {
    const response = await fetch("/api/message");
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <main>
      <h1>TP Docker Compose</h1>
      <p>Frontend React + Backend Express avec Docker Compose</p>

      <button onClick={callBackend}>Appeler le backend</button>

      {message && <p data-testid="backend-message">{message}</p>}
    </main>
  );
}