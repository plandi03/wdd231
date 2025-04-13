document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactUsForm");
    const thankYouDialog = document.getElementById("thankYouDialog");
    const closeDialogButton = document.getElementById("closeDialog");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        // Show the thank-you dialog
        thankYouDialog.showModal();

        // Reset the form fields
        form.reset();
    });

    closeDialogButton.addEventListener("click", () => {
        // Close the dialog
        thankYouDialog.close();
    });
});