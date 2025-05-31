// menu clcik start
// Menu click toggle
$(".menu").on('click', function () {
  $("body").toggleClass('open');
});

// Close menu when any nav link is clicked
$(".nav a").on('click', function () {
  $("body").removeClass('open');
});


$(".contact_connect").on('click', function () {
  var selector = $("body");

  if (selector.hasClass('open_contact_connect')) {
      selector.removeClass('open_contact_connect');
  } else {
      selector.addClass('open_contact_connect');
  }
});



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
        slidesPerView: '1.5',
      },
      990: {
        spaceBetween: 30, 
        slidesPerView: '2',
      },
      1300: {
        spaceBetween: 30, 
        slidesPerView: '3',
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

