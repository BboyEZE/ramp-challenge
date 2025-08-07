import React, { useEffect, useState } from "react";

export default function App() {
  const [flag, setFlag] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/7a6561")
      .then((res) => res.text())
      .then((data) => {
        console.log("Fetched data:", data);
        setFlag(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching:", err);
        setFlag("Error fetching flag.");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      {<h1>The Flag</h1>}
      {loading ? <p>Loading...</p> : <p>{flag}</p>}
    </div>
  );
}

