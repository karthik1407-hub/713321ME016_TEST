// JavaScript for booking form handling
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Code to handle booking submission (e.g., send data to server, store booking)
    // Example alert for demonstration
    alert("Booking submitted!");
    this.reset();
});
