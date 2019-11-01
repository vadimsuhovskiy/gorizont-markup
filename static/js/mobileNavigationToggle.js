jQuery(document).ready(function () {
    $('.js-navigation-toggle').on('click', function(){
        $('.navigation').addClass('active');
    })
    $('.js-navigation-hide').on('click', function(){
        $('.navigation').removeClass('active');
    })
});