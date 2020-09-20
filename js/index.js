new TypeIt(".element",{
    strings:["I am learning from LEDP","Web Design", "Web Development", "& WordPress Development"],
    breakLines:false,
    loop: true,
    cursorSpeed: 4000,
  
  
}).go();

jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 15,
        time: 1000,

    });
});




var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});


$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["",""],
        slideSpeed:1000,
        autoPlay:true
    });
});


$(window).scroll(function() {
    var sticky = $('.navbar'),
      scroll = $(window).scrollTop();
  
    if (scroll >= 40) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  $(document).scroll(function(){
    if($(this).scrollTop() > 50)
    {   
        $('.navbar-brand').css({"padding-left":"40px"});
        $('header .bg-darks').css({"background":"rgba(0,0,0,.5)"});
    }else{
        $('header .bg-darks').css({"background":"transparent"});
    

    }
});




