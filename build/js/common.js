$(document).ready(function(){
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    (function init100vh(){
        function setHeight() {
            var vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        setHeight();
        window.addEventListener('resize', setHeight);
    })();


    $('.burger').on('click', function (){
        $('.nav').toggleClass('nav--show')
        $('.burger').toggleClass('open')
    });

    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        }
    });
    /*================================
        Плавный скролл до якоря jquery
    =================================*/
    $("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });

    $(".mob-nav").on('click', '[href*="#"]', function(e){

        var fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        $('.mob-nav').removeClass('nav--show')
        e.preventDefault();
    });

});
