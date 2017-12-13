$(document).ready(function () {
    $('.preview').mouseover(function () {
        var container = $('.preview_container');
        var container_img = $('.preview_container img');

        var img = $(this).attr('src');
        container_img.attr('src', img);

        var window_w = $(document).width();
        var window_h = $(document).height();

        var position = $(this).position();

        var topPosition = position.top + 80;

        var leftPosition = $(this).width() + position.left + 20;
        var rightPosition = position.left;

        if (position.left <= window_w / 2) {
            if (position.top <= window_h / 2) {
                container.css('top', topPosition);
                container.css('left', leftPosition);
                container.css('transform', 'translate(0, 0)');
                showPreview(container, 200);
            } else {
                container.css('bottom', position.bottom);
                container.css('left', leftPosition);
                container.css('transform', 'translate(0, 0)');
                showPreview(container, 200);
            }

        } else {
            if (position.top <= window_h / 2) {
                container.css('top', topPosition);
                container.css('left', rightPosition);
                container.css('transform', 'translate(-100%, 0)');
                showPreview(container, 200);
            } else {
                container.css('bottom', position.bottom);
                container.css('left', rightPosition);
                container.css('transform', 'translate(-100%, 0)');
                showPreview(container, 200);
            }
        }
    });
    
    $('.preview').mouseleave(function(){
        var container = $('.preview_container');
        container.hide(150);
    });
    
    var cards = $('.card');
    
    $('.card').mouseover(function(){
        cards.css('opacity', '0.7');
        cards.addClass('shake_it');
        
        $(this).removeClass('shake_it');
        $(this).css('opacity', '1');
    });
    
    $('.card').mouseleave(function(){
        cards.css('opacity', '1');
        cards.removeClass('shake_it');
    });
});
