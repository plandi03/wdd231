document.addEventListener("DOMContentLoaded", () => {
    const visitorMessage = document.getElementById("visitorMessage");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (!lastVisit) {
        visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            visitorMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitorMessage.textContent = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit > 1 ? "s" : ""} ago.`;
        }
    }

    localStorage.setItem("lastVisit", now);
});