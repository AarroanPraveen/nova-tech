// scripts.js

// Smooth Scroll Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Add to Cart Functionality
const cart = [];
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const ITEMCard = button.closest('.ITEM-card');
        const ITEMName = ITEMCard.querySelector('h3').textContent;
        const ITEMDescription = ITEMCard.querySelector('p').textContent;

        // Add ITEM to cart
        cart.push({
            name: ITEMName,
            description: ITEMDescription,
        });

        alert(`${ITEMName} has been added to your cart!`);
        console.log(cart); 
    });
});

// Contact Form Submission Handler
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset(); // Reset the form fields
    } else {
        alert('Please fill out all fields before submitting.');
    }
});


