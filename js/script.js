
    


    const menuIcon = document.querySelector('.menu-icon'); // Menu icon selector
    const mobileNav = document.querySelector('.for-mbl');  // Mobile nav selector
    const header = document.querySelector('.fixed'); // Header with sticky behavior
    const heroSection = document.querySelector('.hero-section'); // Hero section
    
    // Add event listener to toggle menu
    menuIcon.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    
        // Toggle between hamburger and close icon
        if (mobileNav.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
    
    // Sticky menu functionality
    window.addEventListener('scroll', function() {
        const heroHeight = heroSection.offsetHeight;
        const windowWidth = window.innerWidth; // Get the current window width
        
        // Apply sticky class only if the window width is greater than 960px
        if (windowWidth > 960) {
            // Check if the scroll position is past the hero section
            if (window.scrollY > heroHeight) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        } else {
            // Remove the sticky class on mobile (width <= 960px)
            header.classList.remove('sticky');
        }
    });
    



