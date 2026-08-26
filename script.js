// ===============================
// NAVBAR SAAT SCROLL
// ===============================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ===============================
// ANIMASI SAAT SCROLL
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach(function (element) {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// MENU MOBILE
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");

});


// ===============================
// TUTUP MENU SETELAH KLIK
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});