const carousel = document.querySelector('.carousel');
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showTestimonial(idx) {
    const width = testimonials[0].offsetWidth;
    carousel.style.transform = `translateX(-${idx * width}px)`;
}

function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
}

function prevTestimonial() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
}

nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);

// Auto-scroll every 5 seconds
setInterval(nextTestimonial, 5000);
