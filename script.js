document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const bodyElement = document.body;

    // Check if dark mode is already enabled in localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        bodyElement.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', function() {
        bodyElement.classList.toggle('dark-mode');

        // Save the user's preference in localStorage
        if (bodyElement.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});