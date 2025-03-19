document.addEventListener("DOMContentLoaded", () => {
    // Fetch and display weather data
    async function fetchWeather() {
        const city = "Tarija"; // City name
        const apiKey = "bef1a25e7ff4c8c79e8bc87c215dd518"; // Provided API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            // Extract current weather data
            const currentTemp = data.main.temp;
            const currentDescription = data.weather[0].description;
            const icon = data.weather[0].icon; // Weather icon

            // Update the weather widget
            const weatherWidget = document.getElementById("weather-widget");
            weatherWidget.innerHTML = `
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Current Temperature:</strong> ${currentTemp}°C</p>
                <p><strong>Weather:</strong> ${currentDescription}</p>
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${currentDescription}">
            `;
        } catch (error) {
            console.error("Error fetching weather data:", error);
            document.getElementById("weather-widget").innerHTML = "<p>Unable to load weather data.</p>";
        }
    }

    // Fetch and display spotlight members
    async function fetchSpotlights() {
        const url = "data/members.json"; // Path to your JSON file

        try {
            const response = await fetch(url);
            const members = await response.json();

            // Filter gold and silver members
            const spotlightMembers = members.filter(
                (member) => member.membershipLevel === 2 || member.membershipLevel === 3
            );

            // Randomly select 2 or 3 members
            const shuffled = spotlightMembers.sort(() => 0.5 - Math.random());
            const selectedMembers = shuffled.slice(0, 3);

            // Update the spotlight section
            const spotlightSection = document.querySelector(".spotlights");
            spotlightSection.innerHTML = `
                <h2>Company Spotlights</h2>
                ${selectedMembers
                    .map(
                        (member) => `
                    <div class="spotlight">
                        <img src="images/${member.image}" alt="${member.name}">
                        <h3>${member.name}</h3>
                        <p><strong>Phone:</strong> ${member.phone}</p>
                        <p><strong>Address:</strong> ${member.address}</p>
                        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                        <p><strong>Membership Level:</strong> ${member.membershipLevel === 2 ? "Silver" : "Gold"}</p>
                    </div>
                `
                    )
                    .join("")}
            `;
        } catch (error) {
            console.error("Error fetching spotlight members:", error);
            document.querySelector(".spotlights").innerHTML = "<p>Unable to load spotlight members.</p>";
        }
    }

    // Display current year and last modified date
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

    // Fetch weather and spotlight data
    fetchWeather();
    fetchSpotlights();
});
