document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const images = Array.from(track.children);
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    let currentIndex = 0;
    let interval;

    // Function to update the carousel position
    const updateCarousel = () => {
        const imageWidth = images[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    };

    // Function to start the automatic carousel
    const startCarousel = () => {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        }, 3000); // Change every 3 seconds
    };

    // Function to stop the automatic carousel
    const stopCarousel = () => {
        clearInterval(interval);
    };

    // Event listener for the previous button
    prevButton.addEventListener("click", () => {
        stopCarousel(); // Stop auto-slide when manually navigating
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
        startCarousel(); // Restart auto-slide
    });

    // Event listener for the next button
    nextButton.addEventListener("click", () => {
        stopCarousel(); // Stop auto-slide when manually navigating
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
        startCarousel(); // Restart auto-slide
    });

    // Stop the carousel when the mouse is over it
    track.addEventListener("mouseenter", stopCarousel);

    // Restart the carousel when the mouse leaves
    track.addEventListener("mouseleave", startCarousel);

    // Initialize the carousel
    updateCarousel();
    startCarousel();
});