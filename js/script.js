$(document).ready(function () {
    $('.big-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,

        speed: 1000
    });
    $('.head__slider__text').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        asNavFor: ".big-slider",


        speed: 900
    });

});

/* робим бургер обєктом */
const menuBurger = document.querySelector('.burger');
const menuBody = document.querySelector(".burger-list");

/* провіряєм чи є */
if (menuBurger) {

    /* собитіє клік */
    menuBurger.addEventListener("click", function (e) {

        /* добавляєм клас */
        menuBurger.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

/* робим бургер обєктом */
const menuBurgerMinHeader = document.querySelector('.miniheader__burger');
const menuBodyMinHeader = document.querySelector(".miniheader__burger-list");

/* провіряєм чи є */
if (menuBurgerMinHeader) {

    /* собитіє клік */
    menuBurgerMinHeader.addEventListener("click", function (e) {

        /* добавляєм клас */
        menuBurgerMinHeader.classList.toggle('_active');
        menuBodyMinHeader.classList.toggle('_active');
    });
}

