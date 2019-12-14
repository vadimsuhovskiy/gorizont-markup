jQuery(document).ready(function () {

    

    if (window.matchMedia("(max-width: 576px)").matches) {

        var videoBlock = $('.video-js')            
        
        videoBlock.css("height", (window.innerWidth - 20) / 16 * 9)
        
    }

    $('.js-navigation-toggle').on('click', function(){
        $('.navigation').toggleClass('active');
    })
});