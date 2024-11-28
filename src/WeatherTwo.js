import React from "react";

const WeatherTwo = ({ data }) => {
    const { name, main, weather } = data;
    return (
        <div style={styles.container}>
            <h2 style={styles.cityName}>{name}</h2>
            <p style={styles.temperature}>{main.temp}°C</p>
            <p style={styles.weatherDescription}>
                {weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1)}
            </p>
            <img
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt="WeatherOne Icon"
                style={styles.icon}
            />
        </div>
    );
};
const styles = {
    container: {
        textAlign: "center",
        backgroundColor: "#ffe6f2",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "320px",
        margin: "20px auto",
        fontFamily: "'Pacifico', cursive",
    },
    cityName: {
        fontSize: "2rem",
        color: "#ff66b2",
        marginBottom: "10px",
    },
    temperature: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "#ff66b2",
        margin: "10px 0",
    },
    weatherDescription: {
        fontSize: "1.2rem",
        color: "#ff3399",
        marginBottom: "10px",
    },
    icon: {
        width: "100px",
        height: "100px",
    },
    helloKittyIcon: {
        width: "60px",
        height: "60px",
        marginTop: "10px",
    },
};
export default WeatherTwo;
