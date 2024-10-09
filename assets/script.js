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

let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        const container = document.querySelector('.testimonial-container');
        const slideWidth = slides[0].clientWidth;
        container.style.transform = `translateX(-${index * slideWidth}px)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 4000);

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentSlide = i;
            showSlide(i);
        });
    });
