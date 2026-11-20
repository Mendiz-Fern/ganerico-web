document.addEventListener('DOMContentLoaded', () => {
    // Get the necessary elements
    const menuButton = document.getElementById('menu-button');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
   //  const xbutton = document.getElementById('x-button');

    // Function to toggle the sidebar
    menuButton.addEventListener('click', () => {
        // Toggles the 'active' class on the sidebar
        sidebar.classList.toggle('active');
        content.classList.toggle('shifted');
        // Optional: If you want the main content to shift slightly when the menu opens/closes, 
        // you can use the CSS transitions defined above, but for simplicity, 
        // we rely on the CSS margin-left property for the main content shift.
    });
});