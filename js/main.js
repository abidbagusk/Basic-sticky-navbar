// what happen if page is scrolled, run the scroll() function;
window.onscroll = function () {
    scroll()
};

// Call navbar id
var navbar = document.getElementById('navbar');
// what is the navbar height from the top of the page, use the offsetTop
var sticky = navbar.offsetTop;

function scroll() {
    // check if current yPosition >= sticky
    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};