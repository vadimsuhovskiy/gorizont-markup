$(function() {
    $.alerts.dialogClass = 'alert_class';
    $.alerts.overlayColor = false;

    $("a[rel=order]").fancybox({
        'transitionIn': 'fade',
        'transitionOut': 'fade',
        'titleShow': false,
        'showCloseButton': true,
        'hideOnOverlayClick': false,
        'hideOnContentClick': false,
        'overlayShow': true,
        'padding': 0,
        'overlayColor': '#000000',
        'overlayOpacity': '0.6',
        'scrolling': false,
        'showNavArrows': false,
        onClosed : function () {
            $('.product_name').html('');
            $('.product_image').html('');
        }
    });

    var product_id = 0;

    function setProductPreview(product_id, preview_url) {
        $.ajax({
            type: 'POST',
            url: preview_url,
            data: {product_id : product_id},
            success: function(data) {
                if(data['success']) {
                    $('.product_name').html(data['product_name']);
                    $('.product_image').html("<img src=" + data['product_preview'] + ">")
                }
            }
        });
    }

    $('a[rel=order]').on('click', function() {
        var product_id = $(this).attr('id');
        var preview_url = $(this).attr('get_preview_url');
        $('.inputs').removeClass('error');
        document.getElementById('order_form').reset();

        if (product_id) {
            $("#order_form input#id_product").val(product_id);

        } else {
            product_id = $("#id_product :selected").val()
        }

        setProductPreview(product_id, preview_url);
    });

    $('#id_product').on('change', function() {
        var product_id = $("#id_product :selected").val();
        var preview_url = $(this).parents('.order_form').attr('get_preview_url');
        setProductPreview(product_id, preview_url);
    });

    $(document).on('submit', '.order_form', function(event) {
        event.preventDefault();
        var $form = $(event.target);
        $('.inputs').removeClass('error');
        $.ajax({
            type: 'POST',
            url: $form.attr('action'),
            data: $('#order_form').serializeArray(),
            success: function(data) {
                if(data['errors'])
                    for(field in data['errors']) {
                        $('.inputs[name="' + field + '"]').addClass('error');
                    }
                if(data['success']) {
                    $.fancybox.close();
                    document.getElementById('order_form').reset();
                    jAlert(data['message'], '', '');
                    setTimeout(function() { $.alerts._hide() }, 6000);
                }
            }
        });
    });
});