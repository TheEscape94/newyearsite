$(document).ready(function () {
    
    //set canvas
    var rows = 25;
    var columns = 50;

    for (var i = 0; i < rows; i++) {
        for (var y = 0; y < columns; y++) {
            var id = 'q'+i+y;
            $('.network').append("<div class='q_1_100' id='" + id + "'" +
                "data-toggle='tooltip' data-placement='top' title='"+id+" | gdezaovunovu.com'" +
                "></div>");
        }
    }
    
    //statistics
    var ell = $('.q_1_100');
    $('.total').text(ell.length);
    
    //$('.dimension').text(ell.width() + ' | ' + ell.height());

    //click trigera
    $('.a-right').click(function () {
        $('.side').slideToggle(150);
        $('.aside').slideToggle(150);
        if ($('.h-left').css('display') == 'block') {
            $('.h-left').hide();
        } else {
            $('.h-left').show();
        }
    });

    $('.a-left').click(function () {
        $('.aside').slideToggle(150);
        $('.side').slideToggle(150);
        $('.h-left').hide();
    });
});
