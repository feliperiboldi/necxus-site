if($(window).width() > 991) {
	$('.carousel-image').height($(window).height() - 0);
    $(window).resize(function () {
        $('.carousel-image').height($(window).height() - 0);
    });
    } else {
    $('.carousel-image').height($(window).height() - 0);
    $(window).resize(function () {
        $('.carousel-image').height($(window).height() - 0);
    });
}


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".main-menu").addClass("menu-on-scroll");
        } else {
            $(".main-menu").removeClass("menu-on-scroll");
        }
    });
});

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".main-menu").addClass("menu-link-white");
        } else {
            $(".main-menu").removeClass("menu-link-black");
        }
    });
});
