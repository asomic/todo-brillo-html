$(function () {

    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();
        $('.hero .on').css('opacity',currentScrollTop/$('.on').height());

    });

});