document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".discover-grid");

    // Fetch JSON data
    fetch("data/discover.json")
        .then(response => response.json())
        .then(data => {
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.style.gridArea = `card${index + 1}`;
                card.innerHTML = `
                    <figure>
                        <img src="${item.image}" alt="${item.title}">
                    </figure>
                    <h2>${item.title}</h2>
                    <address>${item.address}</address>
                    <p>${item.description}</p>
                    <a href="#" class="learn-more">Learn More</a>
                `;
                grid.appendChild(card);
            });
        });
});