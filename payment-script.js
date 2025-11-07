document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentLink = urlParams.get('link');

    if (paymentLink) {
        document.getElementById('payment-link').href = paymentLink;
        document.getElementById('payment-qr').src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(paymentLink)}&size=200x200`;

        // Simulate payment process
        simulatePayment()
            .then(() => {
                showThankYouMessage();
            })
            .catch(() => {
                console.error('Payment failed.');
            });
    }
});

function simulatePayment() {
    // Simulate a delay for payment processing
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate success based on random condition (for demonstration)
            const success = Math.random() < 0.8; // 80% chance of success
            if (success) {
                resolve();
            } else {
                reject();
            }
        }, 2000); // Simulate network delay
    });
}

function showThankYouMessage() {
    const messageDiv = document.getElementById('thank-you-message');
    messageDiv.style.display = 'block';
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 6000);  // Total duration of message display (2s fadein + 2s display + 2s fadeout)
}


