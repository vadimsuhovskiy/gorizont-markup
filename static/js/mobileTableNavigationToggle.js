jQuery(document).ready(function () {

    

    if (window.matchMedia("(max-width: 576px)").matches) {

        $('.products_tabs.household_filters h1').on('click', function(){
            $('.products_tabs.household_filters').toggleClass('toggled')
        })
        
    }

    
});