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
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            directory.appendChild(memberCard);
        });
    }

    // Display current year and last modified date
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

    fetchMembers();
});