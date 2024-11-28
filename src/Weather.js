import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";

const Weather = () => {
    const [city, setCity] = useState("Toronto");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchWeatherData();
    }, []);

    function fetchWeatherData() {
        setError("");
        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        )
            .then((response) => {
                setWeatherData(response.data);
            })
            .catch(() => {
                setError("city not found, try again.");
            });
    }
    function handleSearch() {
        fetchWeatherData();
    }

    return (
        <div style={styles.container}>
            <div style={styles.searchContainer}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="enter city"
                    style={styles.input}
                />
                <button onClick={handleSearch} style={styles.button}>
                    Search
                </button>
            </div>
            {error && <p style={styles.error}>{error}</p>}
            {weatherData && <WeatherDetails data={weatherData} />}
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f9f0f8",
    },
    searchContainer: {
        marginBottom: "20px",
    },
    input: {
        padding: "10px",
        fontSize: "1.2rem",
        borderRadius: "15px",
        border: "1px solid #ff66b2",
        marginRight: "10px",
        width: "250px",
        backgroundColor: "#fff0f6",
    },
    button: {
        padding: "10px 15px",
        fontSize: "1.2rem",
        borderRadius: "15px",
        border: "none",
        backgroundColor: "#ff66b2",
        color: "white",
        cursor: "pointer",
    },
    error: {
        color: "red",
        fontSize: "1rem",
        marginTop: "10px",
    },
};
export default Weather;

