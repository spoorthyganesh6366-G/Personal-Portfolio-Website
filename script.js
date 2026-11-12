
// Welcome message
console.log("Welcome to Spoorthi's Portfolio!");

// Highlight navigation links when clicked
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        console.log("Navigating to: " + this.textContent);
    });
});

// Contact section message
const contactSection = document.querySelector("#contact");

contactSection.addEventListener("click", function() {
    console.log("Thank you for visiting my portfolio!");
});
