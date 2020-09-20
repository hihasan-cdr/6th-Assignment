(function(){

    'use strict';


    var $projects = $('.gallery');

    $projects.isotope({
        itemSelector: '.img-1',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });
	


})(jQuery);