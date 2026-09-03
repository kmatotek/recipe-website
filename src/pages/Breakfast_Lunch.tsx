import React, { useState, useEffect } from "react";
import apiClient from "../api/RecipeService"; // Adjust this import path to match your file

export default function Breakfast_Lunch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fire the request using your custom instance when the page mounts
    apiClient
      .getAllRecipes() // Appends to baseURL resulting in: /posts/1
      .then((response) => {
        setData(response); // Store the payload
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message); // Store the error message if it fails
        setLoading(false);
      });
  }, []); // Empty array ensures this runs exactly once on load

  console.log(data);
  // UI States
  if (loading) return <h1>🌀 Loading API data...</h1>;
  if (error) return <h1 style={{ color: "red" }}>❌ Error: {error}</h1>;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>✅ API Connection Successful!</h1>
      <p>Below is the raw data returned from your Axios instance:</p>

      {/* Renders the raw JSON object perfectly on screen for checking */}
      <pre
        style={{ background: "#f4f4f4", padding: "15px", borderRadius: "5px" }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
