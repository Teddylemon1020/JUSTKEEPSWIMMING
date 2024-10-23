import React, { useState } from 'react';
import './App.css';

const App = () => {
  // Example data for messages (this would normally come from a server or API)
  const messages = {
    HOTLINE: [
      { id: 1, subject: 'FIRE REPORTS', content: '(LOCATION OF REPORTERS USING THE DEVICE).' },
      { id: 2, subject: 'FLOOD REPORTS', content: '(LOCATION OF REPORTERS USING THE DEVICE).' },
      { id: 3, subject: 'CRIME REPORTS', content: '(LOCATION OF REPORTERS USING THE DEVICE)' }
    ],
    FIRE: [
      { id: 1, subject: 'FIRE REPORTS', content: '(LOCATION OF REPORTERS USING THE DEVICE).' },
    ],
    FLOOD: [
      { id: 2, subject: 'FLOOD REPORTS', content: '(LOCATION OF REPORTERS USING THE DEVICE).' },
    ],
    CRIME: [
      { id: 3, subject: 'CRIME REPORTS', content: '(LOCATION OF REPORTERS USING THE DEVICE)' }
    ]
  };


  // State to store the current selected category (e.g., All Messages)
  const [currentCategory, setCurrentCategory] = useState('HOTLINE');

  // Function to handle button clicks and change the category
  const showMessages = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>BEACON</h1>
      </div>

      <div className="button-container">
        <button onClick={() => showMessages('HOTLINE')}>HOTLINE</button>
        <button onClick={() => showMessages('FIRE')}>FIRE</button>
        <button onClick={() => showMessages('FLOOD')}>FLOOD</button>
        <button onClick={() => showMessages('CRIME')}>CRIME</button>
      </div>

      <div className="message-container">
        <h2>{currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)} Messages</h2>
        <ul>
          {messages[currentCategory].map((msg) => (
            <li key={msg.id}>
              <h3>{msg.subject}</h3>
              <p>{msg.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
