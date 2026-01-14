import React, { useState } from "react";

function Hello() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMessage = () => {
    setLoading(true);
    fetch("http://localhost:8080/api/hello") // your backend URL
      .then((res) => res.text()) // use .json() if backend returns JSON
      .then((data) => {
        setMessage(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching backend:", err);
        setMessage("Error connecting to backend");
        setLoading(false);
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Call Backend API</h1>
      <button
        onClick={fetchMessage}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
        }}
      >
        {loading ? "Loading..." : "Get Message"}
      </button>
      {message && (
        <p style={{ marginTop: "20px", fontSize: "18px", color: "#333" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default Hello;
