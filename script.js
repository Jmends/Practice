document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', () => {
        const passwordCell = button.parentElement.previousElementSibling;
        const actualPassword = passwordCell.getAttribute('data-password');
        
        if (passwordCell.textContent === '********') {
            passwordCell.textContent = actualPassword; // Show the actual password
            button.textContent = '🔒'; // Change to lock icon
        } else {
            passwordCell.textContent = '********'; // Hide the password
            button.textContent = '👁️'; // Change back to eye icon
        }
    });
});
