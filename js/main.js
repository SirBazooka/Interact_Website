// Nav-menu animation
const navMenu = document.getElementById('nav-menu'),
  navMenuIndex = document.getElementById('nav-menu-index'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenuIndex.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenuIndex.classList.remove('show-menu')
  })
}

// ScrollReveal Animation
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '10px',
//   duration: 1500,
//   delay: 0,
// })

// sr.reveal(`.hero .container-medium`, {delay:0})
// sr.reveal(`.experience .container-medium`, {delay:500})
// sr.reveal(`.project, .contact`, {delay: 0})
// sr.reveal(`.our-team .container-medium`, {delay:0})
// sr.reveal(`.featured-event .container-medium`, {delay:0})
// sr.reveal(`.intro-page, .container-medium`, {delay: 500})

// Back on top button
let btn = $("#btn-back-on-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 });

});

// Contact buttons
// no more need in this 2 functions 
// and no more need in toastify.js

// let phone_btn = $("#contact-phone");

// if ($(window).screen.width > 1100) {
//   phone_btn.addClass("show");
// } else {
//   phone_btn.removeClass("show");
// }

function copyToClipboardPhone() {
  let input = "+373 78 213 321";
  navigator.clipboard.writeText(input);
  Toastify({
    text: "Copied!",
    duration: 600,
    destination: null,
    newWindow: false,
    close: false,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: false, // Prevents dismissing of toast on hover
    onClick: function () { } // Callback after click
  }).showToast();
}

function copyToClipboardMail() {
  let input = "interactchisinau2@gmail.com";
  navigator.clipboard.writeText(input);
  Toastify({
    text: "Copied!",
    duration: 600,
    destination: null,
    newWindow: false,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: false, // Prevents dismissing of toast on hover
    onClick: function () { } // Callback after click
  }).showToast();
}

