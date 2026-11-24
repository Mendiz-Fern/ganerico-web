document.addEventListener('DOMContentLoaded', () => {
    // Get the necessary elements
    const menuButton = document.getElementById('menu-button');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const timed_greeting = document.getElementById('timed-greeting');
   //  const xbutton = document.getElementById('x-button');

    const hour = new Date().getHours();

    // Function to toggle the sidebar
    menuButton.addEventListener('click', () => {
        // Toggles the 'active' class on the sidebar
        sidebar.classList.toggle('active');
        content.classList.toggle('shifted');
        // Optional: If you want the main content to shift slightly when the menu opens/closes, 
        // you can use the CSS transitions defined above, but for simplicity, 
        // we rely on the CSS margin-left property for the main content shift.
    });

    if(hour >= 19){
        timed_greeting.textContent = "Hey! Good Evening!";
    }
    else if(hour >= 12){
        timed_greeting.textContent = "Hello! Hope you're having a good afternoon!";
    }
    else if (hour >= 8){
        timed_greeting.textContent = "Good Mornin'!";
    }
    else if(hour >= 6){
        timed_greeting.textContent = "G'mormng. Still not quite awake... Regardless,";
    }

    else if(hour == 5){
        timed_greeting.textContent = "ZzZzZz- *nghh* Oh- you're awake already? Alright-"; 
    }
    else {
        timed_greeting.textContent = "Up late, huh? Yeah me too.";
    }



});