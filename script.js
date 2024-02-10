/*====== toggle icon navbar ======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*====== scroll sections active high ======*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*====sticky navbar =====*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*====== remove toggle  ======*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active'); 
};


/*====scrool reveal=====*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,  .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*====typed js =====*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Cosmetologist', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




// Assuming your form has an ID "contact-form"
let form = document.getElementById('contact-form');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  // Get the form data
  let formData = new FormData(form);

  // Replace "your-email@domain.com" with your actual Formspree email
  let formEndpoint = 'https://formspree.io/pushkarkumarsingh7499@gmail.com';

  try {
    // Send the form data to Formspree
    let response = await fetch(formEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      // Handle a successful form submission (e.g., show a success message)
      console.log('Form submitted successfully');
    } else {
      // Handle errors during form submission
      console.error('Error submitting form:', response.statusText);
    }
  } catch (error) {
    console.error('Error submitting form:', error.message);
  }
});
