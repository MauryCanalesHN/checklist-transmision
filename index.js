
import { useState } from 'react';

export default function Home() {
  const team = [
    'Russel', 'Jeffrey', 'Maury Canales', 'Sarah',
    'Armando', 'Mime', 'Víctor', 'Carlos Posas',
    'Nohely', 'David'
  ];
  const [ready, setReady] = useState({});

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Checklist de Transmisión</h1>
      <ul>
        {team.map(name => (
          <li key={name} style={{
            margin: '10px 0',
            padding: '10px',
            background: ready[name] ? '#d1fae5' : '#fef3c7',
            border: '1px solid #ccc'
          }}>
            <span>{name}</span>
            <button style={{ marginLeft: '1rem' }} onClick={() => {
              setReady(prev => ({ ...prev, [name]: !prev[name] }));
            }}>
              {ready[name] ? 'Estoy listo ✅' : 'En espera ⏳'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
