

    // const menuIcon = document.querySelector('.menu-icon'); // Updated selector
    // const mobileNav = document.querySelector('.for-mbl');

    // // Add event listener to toggle menu
    // menuIcon.addEventListener('click', function() {
    //     mobileNav.classList.toggle('active');

    //     // Toggle between hamburger and close icon
    //     if (mobileNav.classList.contains('active')) {
    //         menuIcon.classList.remove('fa-bars');
    //         menuIcon.classList.add('fa-times');
    //     } else {
    //         menuIcon.classList.remove('fa-times');
    //         menuIcon.classList.add('fa-bars');
    //     }
    // });








    // window.addEventListener('scroll', function() {
    //     const header = document.querySelector('.fixed');
    //     const heroSection = document.querySelector('.hero-section');
        
    //     // Hero section ki height nikaal rahe hain
    //     const heroHeight = heroSection.offsetHeight;
    
    //     // Check karein agar scroll position hero section ki height se zyada hai
    //     if (window.scrollY > heroHeight) {
    //         header.classList.add('sticky');
    //     } else {
    //         header.classList.remove('sticky');
    //     }
    // });
    


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
    







    // const menuIcon = document.querySelector('.menu-icon'); 
    // const mobileNav = document.querySelector('.for-mbl'); // Existing menu
    // const newMobileNav = document.querySelector('.new-menu'); // New sticky menu
    // const header = document.querySelector('.fixed'); // Header
    
    // // Toggle menu visibility on click
    // menuIcon.addEventListener('click', function() {
    //     if (header.classList.contains('sticky')) {
    //         // If sticky class is active, toggle the new menu
    //         newMobileNav.classList.toggle('active');
    //         mobileNav.classList.remove('active'); // Hide the old menu if it's open
    //     } else {
    //         // Otherwise, toggle the existing menu
    //         mobileNav.classList.toggle('active');
    //         newMobileNav.classList.remove('active'); // Hide the new menu if it's open
    //     }
    
    //     // Toggle between hamburger and close icon
    //     if (mobileNav.classList.contains('active') || newMobileNav.classList.contains('active')) {
    //         menuIcon.classList.remove('fa-bars');
    //         menuIcon.classList.add('fa-times');
    //     } else {
    //         menuIcon.classList.remove('fa-times');
    //         menuIcon.classList.add('fa-bars');
    //     }
    // });
    
    // // Sticky menu functionality
    // window.addEventListener('scroll', function() {
    //     const heroSection = document.querySelector('.hero-section');
    //     const heroHeight = heroSection.offsetHeight;
    
    //     // Add/remove sticky class based on scroll position
    //     if (window.scrollY > heroHeight) {
    //         header.classList.add('sticky');
    //         newMobileNav.style.display = 'block'; // Show the new menu when sticky
    //     } else {
    //         header.classList.remove('sticky');
    //         newMobileNav.style.display = 'none'; // Hide the new menu when not sticky
    //     }
    // });
    




    // const menuIcon = document.querySelector('.menu-icon'); // Updated selector
    // const mobileNav = document.querySelector('.for-mbl');
    
    // // Add event listener to toggle menu
    // menuIcon.addEventListener('click', function() {
    //     mobileNav.classList.toggle('active');
    
    //     // Toggle between hamburger and close icon
    //     if (mobileNav.classList.contains('active')) {
    //         menuIcon.classList.remove('fa-bars');
    //         menuIcon.classList.add('fa-times');
    //     } else {
    //         menuIcon.classList.remove('fa-times');
    //         menuIcon.classList.add('fa-bars');
    //     }
    // });
    
    // window.addEventListener('scroll', function() {
    //     const header = document.querySelector('.fixed');
    //     const heroSection = document.querySelector('.hero-section');
    //     const heroHeight = heroSection.offsetHeight;
    //     const screenWidth = window.innerWidth; // Get screen width
    
    //     // If screen width is 960px or smaller, disable sticky and use fixed position
    //     if (screenWidth <= 960) {
    //         header.style.position = 'fixed'; // Make the header fixed
    //         header.classList.remove('sticky'); // Remove sticky class if applied
    //     } else {
    //         // If screen width is larger than 960px, apply sticky functionality
    //         if (window.scrollY > heroHeight) {
    //             header.classList.add('sticky'); // Add sticky class after hero section
    //         } else {
    //             header.classList.remove('sticky'); // Remove sticky class before hero section
    //         }
    //         header.style.position = ''; // Reset position when larger than 960px
    //     }
    // });
    












    // const menuIcon = document.querySelector('.menu-icon'); // Updated selector
    // const mobileNav = document.querySelector('.for-mbl');
    
    // // Add event listener to toggle menu
    // menuIcon.addEventListener('click', function() {
    //     mobileNav.classList.toggle('active');
    
    //     // Toggle between hamburger and close icon
    //     if (mobileNav.classList.contains('active')) {
    //         menuIcon.classList.remove('fa-bars');
    //         menuIcon.classList.add('fa-times');
    //     } else {
    //         menuIcon.classList.remove('fa-times');
    //         menuIcon.classList.add('fa-bars');
    //     }
    // });
    
    // window.addEventListener('scroll', function() {
    //     const header = document.querySelector('.fixed');
    //     const heroSection = document.querySelector('.hero-section');
    //     const heroHeight = heroSection.offsetHeight;
    //     const screenWidth = window.innerWidth; // Get screen width
    
    //     // Apply position: fixed if screen width is 960px or larger
    //     if (screenWidth >= 960) {
    //         header.style.position = 'fixed'; // Make the header fixed on 960px or larger screens
    
    //         if (window.scrollY > heroHeight) {
    //             header.classList.add('sticky'); // Add sticky if scrolled past hero section
    //         } else {
    //             header.classList.remove('sticky'); // Remove sticky if before hero section
    //         }
    //     } else {
    //         // Disable sticky and make position static for smaller screens
    //         header.style.position = 'static'; // Reset to default for small screens
    //         header.classList.remove('sticky');
    //     }
    // });
    

















//     const menuIcon = document.querySelector('.menu-icon'); // Updated selector
// const mobileNav = document.querySelector('.for-mbl');

// // Add event listener to toggle menu
// menuIcon.addEventListener('click', function() {
//     mobileNav.classList.toggle('active');

//     // Toggle between hamburger and close icon
//     if (mobileNav.classList.contains('active')) {
//         menuIcon.classList.remove('fa-bars');
//         menuIcon.classList.add('fa-times');
//     } else {
//         menuIcon.classList.remove('fa-times');
//         menuIcon.classList.add('fa-bars');
//     }
// });

// window.addEventListener('scroll', function() {
//     const header = document.querySelector('.fixed');
//     const heroSection = document.querySelector('.hero-section');
    
//     // Hero section height calculation
//     const heroHeight = heroSection.offsetHeight;

//     // Apply sticky class after scrolling past hero section
//     if (window.scrollY > heroHeight) {
//         header.classList.add('sticky');
//     } else {
//         header.classList.remove('sticky');
//     }
// });





















// const menuIcon = document.querySelector('.menu-icon'); // Updated selector
// const mobileNav = document.querySelector('.for-mbl');

// // Add event listener to toggle menu
// menuIcon.addEventListener('click', function() {
//     mobileNav.classList.toggle('active');

//     // Toggle between hamburger and close icon
//     if (mobileNav.classList.contains('active')) {
//         menuIcon.classList.remove('fa-bars');
//         menuIcon.classList.add('fa-times');
//     } else {
//         menuIcon.classList.remove('fa-times');
//         menuIcon.classList.add('fa-bars');
//     }
// });

// window.addEventListener('scroll', function() {
//     const header = document.querySelector('.fixed');
//     const heroSection = document.querySelector('.hero-section');
//     const heroHeight = heroSection.offsetHeight;
//     const screenWidth = window.innerWidth; // Get screen width

//     // Only apply sticky class if screen width is greater than 960px
//     if (screenWidth > 960) {
//         if (window.scrollY > heroHeight) {
//             header.classList.add('sticky');
//         } else {
//             header.classList.remove('sticky');
//         }
//     } else {
//         // Remove sticky class for small screens
//         header.classList.remove('sticky');
//     }
// });
