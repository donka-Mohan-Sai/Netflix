let currentIndex = 0;

const showSlides = (index) => {
    const slides = document.querySelectorAll('.slider-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 220; // 200px width + 20px margin
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${offset}px)`;
    });
};

document.querySelector('.prev').addEventListener('click', () => {
    showSlides(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    showSlides(currentIndex + 1);
});

showSlides(currentIndex);
