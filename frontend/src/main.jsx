import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const [message, setMessage] = useState('Clique sur le bouton pour appeler le backend.');

  const callBackend = async () => {
    try {
      const response = await fetch('/api/message');
      const data = await response.json();
      setMessage(data.message + ' - ' + data.timestamp);
    } catch (error) {
      setMessage('Erreur lors de l’appel au backend.');
    }
  };

  return (
    <main className="container">
      <section className="card">
        <h1>TP Docker Compose</h1>
        <p>Monorepo avec un frontend React, un backend Express et Docker Compose.</p>
        <button onClick={callBackend}>Appeler le backend</button>
        <pre>{message}</pre>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
