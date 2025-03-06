import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import logoFelisha from "../assets/logoFelisha.jpg";
import PostForm from "./PostForm";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/messages");
      setMessages(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  const handlePostCreated = (newPost) => {
    setMessages([...messages, newPost]);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/messages/${id}`);
      setMessages(messages.filter((msg) => msg._id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
      setError("Failed to delete message. Please try again.");
    }
  };

  return (
    <div className="App">
      <div className="header">
        <img src={logoFelisha} alt="logo Felisha" className="logo" />
        <h1>BEACON</h1>
      </div>

      <div className="button-container">
        <button onClick={() => navigate("/hotline")}>Hotline</button>
        <button onClick={() => navigate("/vision-mission")}>
          Vision & Mission
        </button>
      </div>

      <PostForm onPostCreated={handlePostCreated} />

      <div className="message-container">
        <h2>Messages</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : messages.length > 0 ? (
          <ul>
            {messages.map((msg) => (
              <li key={msg._id}>
                <h3>{msg.subject}</h3>
                <p>{msg.content}</p>
                <button onClick={() => handleDelete(msg._id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No messages available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
