// Function to handle WhatsApp ordering
function orderWhatsApp(flavorName) {
    const phoneNumber = "923266893326"; // Apna number yahan likhein
    const message = `Salam, mujhe ${flavorName} burrito order karna hai. %0ADelivery Address: `;
    
    // Open WhatsApp in new tab
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank').focus();
}

// Smooth scroll to menu
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}