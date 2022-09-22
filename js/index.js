$('document').ready(function() {

    const swiper = new Swiper(".swiper", {
        autoplay: {
            delay:3000
        },
        loop:false,
        pagination: {
            el: ".swiper-pagination",
            clickable:true,
        },
        renderBullet: function (index, className) {
            return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
        }
    })
})