import React from "react";
import WeatherOne from "./WeatherOne";

const App = () => {
  return (
      <div style={styles.container}>
        <h1 style={styles.header}>Weather App</h1>
        <WeatherOne />
      </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f0f8ff",
    minHeight: "100vh",
  },
  header: {
    color: "#333",
    fontSize: "2rem",
    marginBottom: "20px",
  },
};

export default App;
