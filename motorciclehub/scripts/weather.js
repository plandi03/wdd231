document.addEventListener("DOMContentLoaded", () => {
    // Select the container where weather data will be displayed
    const weatherContainer = document.getElementById("weather-container");

    // Fetch and display weather data
    async function fetchWeather() {
        const city = "Tarija";
        const apiKey = "bef1a25e7ff4c8c79e8bc87c215dd518";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const { main, weather } = data;
                weatherContainer.innerHTML = `
                    <p><strong>Temperature:</strong> ${main.temp}°C</p>
                    <p><strong>Condition:</strong> ${weather[0].description}</p>
                `;
            })
            .catch(error => {
                weatherContainer.innerHTML = `<p>Unable to fetch weather data. Please try again later.</p>`;
                console.error("Error fetching weather data:", error);
            });
    }

    fetchWeather(); // Call the function to fetch and display weather data
});