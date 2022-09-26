$('document').ready(function() {
    $('.item').eq(0).addClass("active");
    const swiper = new Swiper(".swiper", {
        autoplay: {
            delay: 5700,
            disableOnInteraction: false
        },
        effect: "fade",
        loop:true,
    })

    const swiper1 = new Swiper(".swiper_news", {
        effect: "fade",
        autoplay: {
            delay: 1000,
        },
        loop:true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
        }
    })

    swiper.on("transitionEnd", function(e){
        var slideIndex = swiper.realIndex;
        $('.item').removeClass("active");
        $('.item').eq(slideIndex).addClass("active");
    });

    $(window).scroll(function() {
        let header_height = $('.swiper').height() - 100;
        let top = $(this).scrollTop();
        if(top > header_height) {
            $('.header_wrap').addClass("on");
            $('.header_wrap .menu ul').css("line-height", "100px");
        }
        else {
            $('.header_wrap').removeClass("on");
            $('.header_wrap .menu ul').css("line-height", "150px");
        }
    })
    $('.item').click(function() {
        let i = $(this).index();
        $('.item').removeClass("active");
        $(this).addClass("active");
        swiper.slideTo(i+1)
    })

    $('.nav li').click(function() {
        $('.nav li').removeClass("on");
        $(this).addClass("on");
    })
})