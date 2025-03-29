// Populate the form data from the URL parameters
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);

    document.getElementById("firstName").textContent = urlParams.get("firstName");
    document.getElementById("lastName").textContent = urlParams.get("lastName");
    document.getElementById("email").textContent = urlParams.get("email");
    document.getElementById("phone").textContent = urlParams.get("phone");
    document.getElementById("organization").textContent = urlParams.get("organization");
    document.getElementById("membershipLevel").textContent = urlParams.get("membershipLevel");
    document.getElementById("timestamp").textContent = urlParams.get("timestamp");

    // Update footer with current year and last modified date
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});