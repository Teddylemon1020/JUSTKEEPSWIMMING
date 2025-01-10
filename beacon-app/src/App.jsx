import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState({}); // Store fetched data
  const [currentCategory, setCurrentCategory] = useState("HOTLINE"); // Default category
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch data from the backend API
    fetch("http://localhost:5000/api/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMessages(data); // Save fetched data in state
        setLoading(false); // Data has been loaded
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

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
        <button onClick={() => showMessages("HOTLINE")}>HOTLINE</button>
        <button onClick={() => showMessages("FIRE")}>FIRE</button>
        <button onClick={() => showMessages("FLOOD")}>FLOOD</button>
        <button onClick={() => showMessages("CRIME")}>CRIME</button>
      </div>

      <div className="message-container">
        <h2>
          {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}{" "}
          Messages
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : messages[currentCategory] &&
          messages[currentCategory].length > 0 ? (
          <ul>
            {messages[currentCategory].map((msg) => (
              <li key={msg.id}>
                <h3>{msg.subject}</h3>
                <p>{msg.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No messages available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default App;
