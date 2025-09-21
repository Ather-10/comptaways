// Selectors
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

// Open menu
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

// Close menu
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});


// Tabs switch


const buttons = document.querySelectorAll(".tab-btn");
const cards = document.querySelectorAll(".card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // remove active from all
    buttons.forEach(b => b.classList.remove("active"));
    cards.forEach(c => c.classList.remove("active"));

    // add active to current
    btn.classList.add("active");
    const target = document.getElementById(btn.dataset.target);
    target.classList.add("active");
  });
});


  //  review section

   document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
    
    let currentIndex = 1; // Always start with middle card
    const cardCount = cards.length;

    // Function to update carousel
    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 40; // card width + margin
        const offset = (carousel.offsetWidth - cardWidth) / 2;
        
        // Move carousel so middle card is centered
        carousel.style.transform = `translateX(-${currentIndex * cardWidth - offset}px)`;
        
        // Update active/inactive cards
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add('active');
                card.classList.remove('inactive');
            } else {
                card.classList.remove('active');
                card.classList.add('inactive');
            }
        });
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Next button event
    nextBtn.addEventListener('click', function() {
        if (currentIndex < cardCount - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Previous button event
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentIndex = index;
            updateCarousel();
        });
    });

    setInterval(function() {
                currentIndex = (currentIndex + 1) % cardCount;
                updateCarousel();
            }, 5000);
            
    // Resize handle
    window.addEventListener('resize', updateCarousel);

    // Init
    updateCarousel();
});
