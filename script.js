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

// Room data
const rooms = [
    {
        id: 1,
        title: "Luxury Ocean Suite",
        price: "$299/night",
        mainImage: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200",
        additionalImages: [
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1200"
        ],
        description: "Experience ultimate luxury in our Ocean Suite featuring panoramic sea views, a private balcony, and premium amenities. Perfect for those seeking a memorable coastal retreat."
    },
    {
        id: 2,
        title: "Garden View Deluxe",
        price: "$199/night",
        mainImage: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200",
        additionalImages: [
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1200"
        ],
        description: "Immerse yourself in tranquility with our Garden View Deluxe room, featuring lush garden views, modern furnishings, and a cozy sitting area perfect for relaxation."
    },
    {
        id: 2,
        title: "Garden View Deluxe",
        price: "$199/night",
        mainImage: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200",
        additionalImages: [
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1200"
        ],
        description: "Immerse yourself in tranquility with our Garden View Deluxe room, featuring lush garden views, modern furnishings, and a cozy sitting area perfect for relaxation."
    }];



// Initialize the room grid
function initializeRooms() {
    const roomGrid = document.getElementById('roomGrid');

    rooms.forEach(room => {
        const roomCard = document.createElement('div');
        roomCard.className = 'room-card';
        roomCard.innerHTML = `
            <div class="image-container">
                <img src="${room.mainImage}" alt="${room.title}" class="room-image">
                <div class="image-overlay">
                    <button class="see-details-button" onclick="showRoomDetails(${room.id})">
                        See Details
                    </button>
                </div>
            </div>
            <div class="room-info">
                <h3 class="room-title">${room.title}</h3>
                <p class="room-price">${room.price}</p>
            </div>
        `;
        roomGrid.appendChild(roomCard);
    });
}

// Show room details in modal
function showRoomDetails(roomId) {
    const room = rooms.find(r => r.id === roomId);
    if (!room) return;

    const modal = document.getElementById('roomModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImages = document.getElementById('modalImages');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');

    modalTitle.textContent = room.title;
    modalPrice.textContent = room.price;
    modalDescription.textContent = room.description;

    // Set up images
    modalImages.innerHTML = `
        <img src="${room.mainImage}" alt="${room.title}" class="modal-image">
        ${room.additionalImages.map(img => `
            <img src="${img}" alt="${room.title}" class="modal-image">
        `).join('')}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('roomModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
document.getElementById('roomModal').addEventListener('click', (e) => {
    if (e.target.id === 'roomModal') {
        closeModal();
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', initializeRooms);
// rooms

/* Video */

document.addEventListener('DOMContentLoaded', function () {

    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.transform = 'scale(1.05)';
    });

    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.transform = 'scale(1)';
    });
});
/* Video */
