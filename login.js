function login() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === 'admin@admin.com' && password === '123456') {
        alert('Login successful!');
    } else {
        alert('Invalid credentials');
    }
}