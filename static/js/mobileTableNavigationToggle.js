jQuery(document).ready(function () {

    

    if (window.matchMedia("(max-width: 576px)").matches) {

        $('.products_tabs h1').on('click', function(){
            $('.products_tabs').toggleClass('toggled')
        })
        
    }
    
    var imagesArr = $('.video img');
    if (imagesArr) {
        imagesArr.each(function(index, value){
            var imageWidth = value.width
            value.height = imageWidth / 16 * 9
        })
    }
    

    
});