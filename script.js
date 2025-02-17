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
   const roomsData = [
    {
        title: "Deluxe Room",
        images: ["images/rooms/room2.jpg", "images/rooms/room2.jpg"],
        description: "Luxurious room with premium amenities",
        price: "$199/night",
        amenities: ["King-size bed", "Ocean view", "Free WiFi", "Mini bar", "40\" TV"],
        bookingLink: "#"
    },
    {
        title: "Family Suite",
        images: ["images/rooms/room2.jpg", "images/rooms/room2.jpg"],
        description: "Spacious suite for family stays",
        price: "$299/night",
        amenities: ["Two bedrooms", "Kitchenette", "Balcony", "Child-friendly", "Free breakfast"],
        bookingLink: "#"
    },
    {
        title: "Executive Suite",
        images: ["images/rooms/room2.jpg", "images/rooms/room2.jpg"],
        description: "Premium business-class accommodation",
        price: "$349/night",
        amenities: ["Work desk", "Private lounge", "Jacuzzi", "24/7 concierge", "Airport shuttle"],
        bookingLink: "#"
    }
];

function createRoomCard(room) {
    const card = document.createElement('div');
    card.className = 'room-card';
    
    card.innerHTML = `
        <img src="${room.images[0]}" alt="${room.title}" class="room-image">
        <div class="room-content">
            <h3>${room.title}</h3>
            <p>${room.description}</p>
            <button class="show-details">
                Show Details ▼
            </button>
            <div class="additional-details">
                <div class="price-tag">${room.price}</div>
                <ul class="amenities-list">
                    ${room.amenities.map(item => `<li>✓ ${item}</li>`).join('')}
                </ul>
                <a href="${room.bookingLink}" class="book-button">Book Now</a>
            </div>
        </div>
    `;

    const detailsButton = card.querySelector('.show-details');
    const detailsSection = card.querySelector('.additional-details');

    detailsButton.addEventListener('click', () => {
        detailsSection.classList.toggle('active');
        detailsButton.textContent = detailsSection.classList.contains('active') 
            ? 'Hide Details ▲' 
            : 'Show Details ▼';
    });

    return card;
}

// Initialize rooms
document.addEventListener('DOMContentLoaded', () => {
    const roomGrid = document.querySelector('.room-grid');
    roomsData.forEach(room => {
        roomGrid.appendChild(createRoomCard(room));
    });
});
    // rooms

