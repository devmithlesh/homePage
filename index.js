let a = document.querySelector(".toogle_bar");
let b = document.querySelector(".cross_bar");
let c = document.querySelector(".bar_menus");

a.addEventListener("click", function () {
    c.classList.add("open");
});
b.addEventListener("click", function () {
    c.classList.remove("open");
});

// ---------------- Testimonial ---------------------

$('.testimonial').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '.next_caro',
    prevArrow: '.previous_caro'
});