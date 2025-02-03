function changeSlide(direction, productIndex) {
    const carousels = document.querySelectorAll('.carousel');
    const images = carousels[productIndex].querySelectorAll('.carousel-image');
    let activeIndex = 0;

    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            activeIndex = index;
            img.classList.remove('active');
        }
    });

    let newIndex = activeIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    images[newIndex].classList.add('active');
}
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("header nav");

    navToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});
document.querySelectorAll('.contact a').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});
document.getElementById("emailLink").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("https://mail.google.com/mail/?view=cm&to=jualanrumahmotor@gmail.com&su=Customer%20Toko&body=Write%20your%20message%20here", "_blank");
});
