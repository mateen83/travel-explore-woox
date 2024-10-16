

    const menuIcon = document.querySelector('.menu-icon'); // Updated selector
    const mobileNav = document.querySelector('.for-mbl');

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








    window.addEventListener('scroll', function() {
        const header = document.querySelector('.fixed');
        const heroSection = document.querySelector('.hero-section');
        
        // Hero section ki height nikaal rahe hain
        const heroHeight = heroSection.offsetHeight;
    
        // Check karein agar scroll position hero section ki height se zyada hai
        if (window.scrollY > heroHeight) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
    