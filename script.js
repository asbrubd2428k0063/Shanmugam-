// Show project details on click

function showProjectDetails(projectName) {

    alert("You clicked on " + projectName + ". More details will be added soon!");

}

// Contact form submission

document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    // Display a simple confirmation message

    document.getElementById("formMessage").textContent = `Thank you ${name}! Your message has been sent.`;

    // Reset form fields

    this.reset();

});