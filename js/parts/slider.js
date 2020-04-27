function slider() {
    let currentSlide = 0,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(currentSlide);

    function showSlides(n) {

        if (n > slides.length - 1) {
            currentSlide = 0;
        }
        if (n < 0) {
            currentSlide = slides.length - 1;
        }


        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[currentSlide].style.display = 'block';
        dots[currentSlide].classList.add('dot-active');
    }

    function showChangeSlide(n) {
        currentSlide = currentSlide + n;
        showSlides(currentSlide);
    }

    function showCurrentSlide(n) {
        currentSlide = n;
        showSlides(currentSlide);
    }

    prev.addEventListener('click', () => showChangeSlide(-1));
    next.addEventListener('click', () => showChangeSlide(1));

    dotsWrap.addEventListener('click', function (e) {
        for (let i = 0; i < dots.length; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i]) {
                showCurrentSlide(i);
            }
        }
    });
}

module.exports = slider;