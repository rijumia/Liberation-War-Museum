function updateDateTime() {
    const currentDate = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true
    };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    document.getElementById('date-time').textContent = formattedDate;
}

// Update the date and time when the page loads
updateDateTime();

// Set interval to update the time every second
setInterval(updateDateTime, 1000);


    // Event Listener for Form Submission
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Check if all fields are filled
        if (name && email && message) {
            alert("Thank you for contacting us! Your message has been sent.");
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });