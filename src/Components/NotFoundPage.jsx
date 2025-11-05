import React from "react";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
    let navigate = useNavigate()
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <h2 style={styles.subtitle}>Page Not Found</h2>
      <p style={styles.text}>Sorry, the page you are looking for does not exist.</p>
      <button style={styles.button} onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    color: "#333",
  },
  title: {
    fontSize: "6rem",
    margin: 0,
  },
  subtitle: {
    fontSize: "2rem",
    margin: "1rem 0",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "2rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  },
};

export default NotFoundPage;
