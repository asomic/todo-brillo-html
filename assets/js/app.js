$(function () {

    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();
        $('.hero .on').css('opacity',currentScrollTop/$('.on').height());

    });

    var startsize = window.matchMedia("(min-width: 0px)");
    var ipadVertical = window.matchMedia("(min-width: 768px)");
    var ipadHorizontal = window.matchMedia("(min-width: 900px)");
    var desk = window.matchMedia("(min-width: 1400px)");

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });

    if (startsize.matches) {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        });
    } 

    if (ipadVertical.matches) {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        });
    } 
    
    if (ipadHorizontal.matches) {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        });
    }
    
    if (desk.matches) {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 6,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        });
    }

    $('.selector .swiper-slide').click(function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#aromatizantes-section").offset().top
        }, 600);
    })

    $('#ar-1').click(function(){
        $('.aroma-info').addClass('brisa-marina');
        $('.aroma-info').removeClass('algodon bambu lavanda floral bebe vainilla anti-tabaco');
    })

    $('#ar-2').click(function(){
        $('.aroma-info').addClass('hawaiian');
        $('.aroma-info').removeClass('brisa-marina algodon bambu lavanda floral bebe vainilla anti-tabaco');
    })
    
    $('#ar-3').click(function(){
        $('.aroma-info').addClass('algodon');
        $('.aroma-info').removeClass('brisa-marina hawaiian bambu lavanda floral bebe vainilla anti-tabaco');
        // $('.aroma-info').removeClass('brisa-marina hawaiian algodon bambu lavanda floral bebe vainilla anti-tabaco');
    })
    
    $('#ar-4').click(function(){
        $('.aroma-info').addClass('bambu');
        $('.aroma-info').removeClass('brisa-marina hawaiian algodon lavanda floral bebe vainilla anti-tabaco');
        // $('.aroma-info').removeClass('brisa-marina hawaiian algodon bambu lavanda floral bebe vainilla anti-tabaco');
    })
    
    $('#ar-5').click(function(){
        $('.aroma-info').addClass('lavanda');
        $('.aroma-info').removeClass('brisa-marina hawaiian algodon bambu floral bebe vainilla anti-tabaco');
        // $('.aroma-info').removeClass('brisa-marina hawaiian algodon bambu lavanda floral bebe vainilla anti-tabaco');
    })
    
    $('#ar-6').click(function(){
        $('.aroma-info').addClass('floral');
        $('.aroma-info').removeClass('brisa-marina hawaiian algodon bambu lavanda bebe vainilla anti-tabaco');
        // $('.aroma-info').removeClass('brisa-marina hawaiian algodon bambu lavanda floral bebe vainilla anti-tabaco');
    })
    
    $('#ar-7').click(function(){
        $('.aroma-info').addClass('bebe');
        $('.aroma-info').removeClass('brisa-marina hawaiian algodon bambu lavanda floral vainilla anti-tabaco');
    })
    
    $('#ar-8').click(function(){
        $('.aroma-info').addClass('vainilla');
        $('.aroma-info').removeClass('brisa-marina hawaiian algodon bambu lavanda floral anti-tabaco');
    })
    
    $('#ar-9').click(function(){
        $('.aroma-info').addClass('anti-tabaco');
        $('.aroma-info').removeClass('brisa-marina vainilla hawaiian algodon bambu lavanda floral');
    })
    
    // Automatico: Lavanda
    $('.a-1').click(function(){
        $('.automatico .header .img').addClass('a-lavanda');
        $('.automatico .header .img').removeClass('a-manzana a-bebe a-brisa');
    })
    
    // Automatico: Manzana y Canela
    $('.a-2').click(function(){
        $('.automatico .header .img').addClass('a-manzana');
        $('.automatico .header .img').removeClass('a-lavanda a-bebe a-brisa');
    })
    
    // Automatico: Bebé
    $('.a-3').click(function(){
        $('.automatico .header .img').addClass('a-bebe');
        $('.automatico .header .img').removeClass('a-lavanda a-manzana a-brisa');
    })
    
    // Automatico: Brisa Marina
    $('.a-4').click(function(){
        $('.automatico .header .img').addClass('a-brisa');
        $('.automatico .header .img').removeClass('a-lavanda a-bebe a-manzana');
    })
    
    // Eléctrico: Lavanda
    $('.e-1').click(function(){
        $('.electricos .header .img').addClass('e-lavanda');
        $('.electricos .header .img').removeClass('e-manzana e-bebe e-brisa');
    })
    
    // Eléctrico: Manzana y Canela
    $('.e-2').click(function(){
        $('.electricos .header .img').addClass('e-manzana');
        $('.electricos .header .img').removeClass('e-lavanda e-bebe e-brisa');
    })
    
    // Eléctrico: Bebé
    $('.e-3').click(function(){
        $('.electricos .header .img').addClass('e-bebe');
        $('.electricos .header .img').removeClass('e-lavanda e-manzana e-brisa');
    })
    
    // Eléctrico: Brisa Marina
    $('.e-4').click(function(){
        $('.electricos .header .img').addClass('e-brisa');
        $('.electricos .header .img').removeClass('e-lavanda e-bebe e-manzana');
    })
    

});