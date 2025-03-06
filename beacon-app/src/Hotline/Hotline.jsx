import React from "react";
import { useNavigate } from "react-router-dom";

function Hotline() {
  const navigate = useNavigate();

  const hotlines = [
    { name: "National Emergency Hotline", number: "911" },
    {
      name: "Philippine National Police (PNP)",
      number: "117 or (02) 8722-0650",
    },
    {
      name: "Bureau of Fire Protection (BFP)",
      number: "(02) 8426-0219, (02) 8426-3812, or (02) 8426-0246",
    },
    { name: "Philippine Red Cross", number: "143 or (02) 527-0000" },
    {
      name: "Department of Social Welfare and Development (DSWD)",
      number: "(02) 931-8101",
    },
    {
      name: "National Disaster Risk Reduction and Management Council (NDRRMC)",
      number: "(02) 8911-5061 to 65",
    },
    {
      name: "Metro Manila Development Authority (MMDA)",
      number: "136 or (02) 8882-4151",
    },
    {
      name: "Philippine Coast Guard (PCG)",
      number: "(02) 8527-3877 or (02) 8527-8482",
    },
    {
      name: "Land Transportation Franchising and Regulatory Board (LTFRB)",
      number: "1342",
    },
  ];

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => navigate("/")}>
        Back to Home
      </button>
      <h1 style={styles.heading}>Emergency Hotline Numbers</h1>
      <div style={styles.cardContainer}>
        {hotlines.map((hotline, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.cardTitle}>{hotline.name}</h2>
            <p style={styles.cardNumber}>{hotline.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    marginTop: "30px",
  },
  backButton: {
    alignSelf: "flex-start",
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    position: "fixed",
    top: "10px",
    left: "10px",
  },
  heading: {
    marginBottom: "20px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    backgroundColor: "#f8f9fa",
    border: "1px solid #dee2e6",
    borderRadius: "8px",
    padding: "20px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  cardTitle: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  cardNumber: {
    fontSize: "16px",
    color: "#495057",
  },
};

export default Hotline;
