function submitLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
   // onauxclick("hello");
    // In a real-world scenario, you would send this information to the server for authentication.
    console.log(`Login form submitted:
        Username: ${username}
        Password: ${password}
    `);
}

function submitSignupForm() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // In a real-world scenario, you would send this information to the server for user registration.
    console.log(`Signup form submitted:
        New Username: ${newUsername}
        New Password: ${newPassword}
    `);
}
