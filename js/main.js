(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.ebal-stat-card');
  const speed = 100; // Lower number = faster counting

  // Function to animate the numbers
  const startCounter = (counterElement) => {
    const target = +counterElement.getAttribute('data-target');
    
    const updateCount = () => {
      const current = +counterElement.innerText;
      // Calculate increment step
      const increment = target / speed;

      if (current < target) {
        counterElement.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 20); // 20ms delay between frames
      } else {
        counterElement.innerText = target; // Ensure it ends exactly on the target
      }
    };
    updateCount();
  };

  // Set up the Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Trigger when 20% of the card is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 1. Add class to slide and fade in the card
        entry.target.classList.add('fade-in');
        
        // 2. Find the counter inside this card and start it
        const counter = entry.target.querySelector('.counter');
        if (counter) {
          startCounter(counter);
        }

        // 3. Stop observing this card so it only animates once
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply the observer to all cards
  cards.forEach(card => {
    observer.observe(card);
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const block1 = document.getElementById('heroBlock1');
    const block2 = document.getElementById('heroBlock2');
    
    // This code swaps the blocks every 6 seconds (6000 milliseconds)
    setInterval(() => {
        if (block1.classList.contains('active')) {
            block1.classList.remove('active');
            block2.classList.add('active');
        } else {
            block2.classList.remove('active');
            block1.classList.add('active');
        }
    }, 6000); 
});


    // Navbar scroll effect
    window.addEventListener("scroll", function() {
        const navbar = document.querySelector(".ebal-navbar");
        // If scrolled down more than 50px, add the glassmorphism class
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });
