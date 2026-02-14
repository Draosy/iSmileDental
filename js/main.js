document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active')
  );
});

/*
// make observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // add class when visible
            entry.target.classList.add('show'); 
        } else {
            // remove when not visible (so it animates again)
            entry.target.classList.remove('show');
        }
    });
}, {
  threshold: 0, // as soon as 1 px visible
});

// select hidden elements
const hiddenElements = document.querySelectorAll('.hidden');

// observer, watch the hidden elements:
hiddenElements.forEach((el) => observer.observe(el));

*/