// Wait for the DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the elements we need
    const mobileMenu = document.querySelector('#mobile-menu');
    const navbarMenu = document.querySelector('.navbar__menu');
    const navbarBtn = document.querySelector('.navbar__btn');

    // Add click event listener to the hamburger menu
    mobileMenu.addEventListener('click', function() {
        // Toggle the 'active' class on the menu
        navbarMenu.classList.toggle('active');
        
        // Toggle the button visibility
        if (navbarBtn) {
            navbarBtn.classList.toggle('active');
        }
        
        // Update the aria-expanded attribute for accessibility
        const isExpanded = mobileMenu.getAttribute('aria-expanded') === 'true';
        mobileMenu.setAttribute('aria-expanded', (!isExpanded).toString());
        
        // Optionally change the hamburger icon to an X when menu is open
        // If using Font Awesome icons:
        const icon = mobileMenu.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
});
