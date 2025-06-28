document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 5000);

    // Form validation
    const form = document.getElementById('order-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const orderDetailsInput = document.getElementById('order-details');
    const submitButton = document.getElementById('submit-order');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const orderDetailsError = document.getElementById('order-details-error');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        let isValid = true;

        // Reset error states
        nameInput.classList.remove('invalid');
        emailInput.classList.remove('invalid');
        orderDetailsInput.classList.remove('invalid');
        nameError.classList.add('hidden');
        emailError.classList.add('hidden');
        orderDetailsError.classList.add('hidden');

        // Validate name
        if (!nameInput.value.trim()) {
            nameInput.classList.add('invalid');
            nameError.classList.remove('hidden');
            isValid = false;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailInput.classList.add('invalid');
            emailError.classList.remove('hidden');
            isValid = false;
        }

        // Validate order details
        if (!orderDetailsInput.value.trim()) {
            orderDetailsInput.classList.add('invalid');
            orderDetailsError.classList.remove('hidden');
            isValid = false;
        }

        if (isValid) {
            alert('Order submitted! We will contact you soon.');
            form.reset();
        }
    });
});