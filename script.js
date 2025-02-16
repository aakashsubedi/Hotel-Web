document.addEventListener('DOMContentLoaded', () => {
    // Banner slider
    const bannerSlider = document.querySelector('.banner-slider');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Dynamically set banner slider width
    bannerSlider.style.width = `${totalSlides * 100}vw`;

    // Create navigation dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        bannerSlider.style.transform = `translateX(-${index * 100}vw)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);
});
    // Banner slider

    // -----Navbar-----
    document.addEventListener("DOMContentLoaded", () => {
        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".nav-links");
        const navItems = document.querySelectorAll(".nav-item");
    
        // Toggle Mobile Menu
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    
        // Close menu when a link is clicked (for mobile users)
        navItems.forEach(item => {
            item.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    
        // Highlight Active Link
        const currentPage = window.location.pathname.split("/").pop();
        navItems.forEach(link => {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active");
            }
        });
    });
    // -----Navbar-----


// Rooms
   // Improved JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const roomCards = document.querySelectorAll('.room-card');

    roomCards.forEach(card => {
        // Load additional images from data attribute
        const images = card.dataset.images?.split(',') || [];
        const imageGrid = card.querySelector('.image-grid');
        
        images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = 'Room Detail';
            img.style.width = '100%';
            img.style.height = '100px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '4px';
            imageGrid.appendChild(img);
        });

        // Touch device optimization
        let touchTimer;
        card.addEventListener('touchstart', () => {
            touchTimer = setTimeout(() => {
                card.classList.add('hover-active');
            }, 500);
        });

        card.addEventListener('touchend', () => {
            clearTimeout(touchTimer);
            card.classList.remove('hover-active');
        });
    });
});
    // rooms

