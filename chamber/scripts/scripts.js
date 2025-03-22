document.addEventListener("DOMContentLoaded", () => {
    // Fetch and display member data
    async function fetchMembers() {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    }

    function displayMembers(members) {
        const directory = document.getElementById('directory');
        directory.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.sector}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            directory.appendChild(memberCard);
        });
    }

    // Toggle between grid and list views
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');
    const directory = document.getElementById('directory');

    gridViewButton.addEventListener('click', () => {
        directory.classList.remove('list-view');
        directory.classList.add('grid-view');
        gridViewButton.classList.add('active');
        listViewButton.classList.remove('active');
    });

    listViewButton.addEventListener('click', () => {
        directory.classList.remove('grid-view');
        directory.classList.add('list-view');
        listViewButton.classList.add('active');
        gridViewButton.classList.remove('active');
    });

    // Display current year and last modified date
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

    fetchMembers();

    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active"); // Alternar la clase 'active' para mostrar/ocultar el menú
    });
});