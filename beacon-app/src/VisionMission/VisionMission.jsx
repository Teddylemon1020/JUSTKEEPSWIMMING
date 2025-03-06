import React from "react";
import { useNavigate } from "react-router-dom";

const VisionMission = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => navigate("/")}>
        Back to Home
      </button>
      <section style={styles.section}>
        <h2 style={styles.heading}>Our Vision</h2>
        <p style={styles.text}>
          Our vision is to be a leading provider of innovative solutions that
          revolutionize emergency response systems, creating safer and more
          resilient communities through advanced technologies and strategic
          partnerships.
        </p>
      </section>
      <section style={styles.section2}>
        <h2 style={styles.heading}>Our Mission</h2>
        <p style={styles.text}>
          Our mission is to enhance emergency response systems and create safer
          communities by developing and implementing advanced technologies to
          streamline emergency communication processes, assessing and improving
          the effectiveness and reliability of existing emergency communication
          systems, shaping strategies and policies that promote effective
          emergency response protocols, providing tailored services and quality
          products to the community in the digital landscape, and transforming
          emergency response systems by implementing advanced technologies and
          improving processes to ensure public safety and effective management
          of emergencies.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  section: {
    marginBottom: "40px",
    marginTop: "100px",
  },
  section2: {
    marginBottom: "40px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.6",
  },
  backButton: {
    position: "fixed",
    top: "10px",
    left: "10px",
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default VisionMission;
