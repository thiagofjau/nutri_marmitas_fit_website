document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    const burgerIcon = burger.querySelector('.fa');

    burger.addEventListener('click', function () {
        nav.classList.toggle('nav-active');
        if (nav.classList.contains('nav-active')) {
        burgerIcon.classList.remove('fa-bars');
        burgerIcon.classList.add('fa-times');
        } else {
        burgerIcon.classList.remove('fa-times');
        burgerIcon.classList.add('fa-bars');
        }
    });
    });