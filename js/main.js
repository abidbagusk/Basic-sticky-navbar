// what happen if page is scrolled, run the scroll() function;
window.onscroll = function () {
    scroll()
};

// Call navbar id
let navbar = document.getElementById('navbar');
// what is the navbar height from the top of the page
let sticky = navbar.offsetTop();