// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToSignin = document.getElementById('switch-to-signin');
    const signupBtn = document.querySelector('.signup-btn');
    const passwordField = signupForm.querySelector('input[type="password"]');
    const showPasswordBtn = document.createElement('span'); // Toggle for password visibility

    // Add a show/hide password button
    showPasswordBtn.innerHTML = '<i class="fas fa-eye"></i>';
    showPasswordBtn.classList.add('show-password');
    passwordField.parentNode.insertBefore(showPasswordBtn, passwordField.nextSibling);

    // Show/Hide password functionality
    showPasswordBtn.addEventListener('click', () => {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        showPasswordBtn.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });

    // Switch to Sign Up form
    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });

    // Switch to Sign In form
    switchToSignin.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    // Simple form validation on Sign Up
    signupBtn.addEventListener('click', (e) => {
        const emailField = signupForm.querySelector('input[type="email"]');
        const nameField = signupForm.querySelector('input[type="text"]');
        const errorMessages = [];

        if (!nameField.value) {
            errorMessages.push('Please enter your full name.');
        }
        if (!emailField.value || !validateEmail(emailField.value)) {
            errorMessages.push('Please enter a valid email.');
        }
        if (!passwordField.value || passwordField.value.length < 6) {
            errorMessages.push('Password should be at least 6 characters long.');
        }

        if (errorMessages.length > 0) {
            alert(errorMessages.join('\n'));
            e.preventDefault(); // Prevent form submission if there are errors
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Smooth transitions between forms
    loginForm.classList.add('fade-in');
    signupForm.classList.add('fade-in');

    // Optional: Password strength checker (simple)
    passwordField.addEventListener('input', () => {
        const strengthMeter = document.querySelector('.password-strength');
        const password = passwordField.value;

        if (password.length < 6) {
            strengthMeter.textContent = 'Weak';
            strengthMeter.style.color = 'red';
        } else if (password.length >= 6 && password.length < 10) {
            strengthMeter.textContent = 'Medium';
            strengthMeter.style.color = 'orange';
        } else {
            strengthMeter.textContent = 'Strong';
            strengthMeter.style.color = 'green';
        }
    });

    // Example for dynamically adding a review (can be used for future backend integration)
    function addReview(text, author, rating) {
        const reviewsSection = document.getElementById('reviews-section');
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');

        // Create the review content
        reviewCard.innerHTML =
            `<p class="review-text">"${text}"</p>
            <div class="review-author">
                <strong>${author}</strong>
                <span class="rating-stars">${getStars(rating)}</span>
            </div>`;

        reviewsSection.appendChild(reviewCard);
    }

    function getStars(rating) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += i < rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
        }
        return stars;
    }

    // Simulate adding a review after page load
    setTimeout(() => {
        addReview("Great platform! Easy to use and connect with others.", "New User", 4);
        addReview("A wonderful platform to connect with professionals and discover job opportunities. Highly recommend!", "Jane Smith", 5);
    }, 3000);
});


document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToSignin = document.getElementById('switch-to-signin');

    // Switch to Sign Up form
    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });

    // Switch to Sign In form
    switchToSignin.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });
});


// Automatic sliding functionality for roles offered
document.addEventListener("DOMContentLoaded", function () {
    const rolesContainer = document.querySelector('.roles-container');

    setInterval(() => {
        rolesContainer.scrollBy({
            left: 150, // Change this value to adjust scrolling speed
            behavior: 'smooth'
        });
    }, 3000); // Change this value to adjust the interval time
});


