// menu clcik start
// Menu click toggle
$(".menu").on('click', function () {
  $("body").toggleClass('open');
});

// Close menu when any nav link is clicked
$(".nav a").on('click', function () {
  $("body").removeClass('open');
});




let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        document.body.classList.add("scroll-down");
    } else {
        // Scrolling up
        document.body.classList.remove("scroll-down");
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
}, false);



// dark mode script start

document.querySelector(".switch").addEventListener("click", function () {
    toggleMenuFunction();
  });
  
  function toggleMenuFunction() {
    var body = document.querySelector(".body");
    body.classList.toggle("dark");
  
    var isDarkModeEnabled = body.classList.contains("dark");
    localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
  }
  
  function initializeDarkMode() {
    var isDarkModeEnabled = JSON.parse(localStorage.getItem("darkModeEnabled"));
    if (isDarkModeEnabled) {
      document.querySelector(".body").classList.add("dark");
    }
  }
  
  window.onload = initializeDarkMode;


//   cursor script start
if (window.innerWidth > 768) {
    var $cursor = $('.cursor');
    var $cursorScale = $('.cursor-scale');
    var mouseX = 0;
    var mouseY = 0;

    $(window).on('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Animate the cursor position with jQuery
        $cursor.css({
            left: mouseX + 'px',
            top: mouseY + 'px'
        });
    });

    $cursorScale.each(function () {
        var $link = $(this);

        $link.on('mousemove', function () {
            $cursor.addClass('grow'); 
            if ($link.hasClass('small')) {
                $cursor.removeClass('grow').addClass('grow-small');
            }
        });

        $link.on('mouseleave', function () {
            $cursor.removeClass('grow').removeClass('grow-small');
        });
    });
}



// typing cursor for banner
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor_text");

const textArray = ["Associate product Manager", "PMO Professional", "Certfied Scrum Master"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});


// swiper start

const swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: '4',
    spaceBetween: 70, // Default spacing
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesPerView: '1.2',
      },

      768: {
        spaceBetween: 30, 
        slidesPerView: '2',
      },
      990: {
        spaceBetween: 30, 
        slidesPerView: '3',
      },
      1300: {
        spaceBetween: 30, 
        slidesPerView: '4',
      },
    },
  });


//   popup start
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.contact-btn');
  const modal = document.querySelector('.popup-modal');
  const closeButton = document.querySelector('.close-btn');

  // Add click event to each contact button
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          modal.style.display = 'block';        // Show the modal
          document.body.classList.add('modal-open'); // Add class to body
      });
  });

  // Close modal on close button click
  closeButton.addEventListener('click', () => {
      modal.style.display = 'none';            // Hide the modal
      document.body.classList.remove('modal-open'); // Remove class from body
  });

  // Close modal when clicking outside the modal content
  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
          document.body.classList.remove('modal-open');
      }
  });
});

