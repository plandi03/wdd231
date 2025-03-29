document.addEventListener("DOMContentLoaded", () => {
    // Set the timestamp
    const timestampField = document.getElementById("timestamp");
    timestampField.value = new Date().toISOString();

    // Modal functionality
    const modalTriggers = document.querySelectorAll(".modal-trigger");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-modal");

    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const modalId = trigger.getAttribute("data-modal");
            document.getElementById(modalId).classList.add("active");
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".modal").classList.remove("active");
        });
    });

    // Close modals when clicking outside
    modals.forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    });
});