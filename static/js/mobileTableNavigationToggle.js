jQuery(document).ready(function () {

    

    if (window.matchMedia("(max-width: 576px)").matches) {

        $('.products_tabs h1').on('click', function(){
            $('.products_tabs').toggleClass('toggled')
        })
        
    }

    
});