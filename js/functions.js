 function appendImage(quadrant, url, alt, link, w, h) {
     var el = $('#' + quadrant);

     var position = el.position();
     var top = position.top;
     var left = position.left;

     var banner = 'baners/' + url;
     var banner_w = w * 2;
     var banner_h = h * 4;

     var canvas = $('.network');

     canvas.append("<a href='" + link + "' target='_blank'><img src='" + banner + "' " +
         "height='" + banner_h + "%' " +
         "width='" + banner_w + "%' " +
         "class='banner preview' alt='" + alt + "' " +
         "style='position:absolute; top:" + top + "px; left:" + left + "px;' /></a>");

     //statistic
     var used = $('.used').text();
     var count = parseInt(used) + w * h;
     $('.used').text(count);

     var newCount = 1250 - count;
     $('.free').text(newCount);
 }

 function showPreview(el, int) {
     el.show(int);
 }

 //img, name, link, circle-img, vote, com

 function appendComment(link, img, badge, people, comment) {
     var canvas = $('.comment-panel');
     var banner = 'baners/' + img;
     if (badge == 1) {
         canvas.append('<a href="' + link + '">' +
             '<div class="card">' +
             '<div class="card-header">' +
             '<img src="' + banner + '" alt="gdezaovunovu.com" />' +
             '</div>' +
             '<div class="circle-image">' +
             '<img src="img/check.png" alt="gdezaovunovu.com" />' +
             '<img class="ribon" src="img/badge.png" alt="gdezaovunovu.com" />' +
             '</div>' +
             '<div class="copy">' +
             '<p>Ispitano ukupno: <span class="label label-warning">' + people + '</span></p><hr/>' +
             '<p class="label label-info">Utisci:</p> ' +
             '<span> ' + comment + '</span>' +
             '</div>' +
             '</div>' +
             '</a>')
     } else {
         canvas.append('<a href="' + link + '">' +
             '<div class="card">' +
             '<div class="card-header">' +
             '<img src="' + banner + '" alt="gdezaovunovu.com" />' +
             '</div>' +
             '<div class="circle-image">' +
             '<img src="img/check.png" alt="gdezaovunovu.com" />' +
             '</div>' +
             '<div class="copy">' +
             '<p>Ispitano ukupno: <span class="label label-warning">' + people + '</span></p><hr/>' +
             '<p class="label label-info">Utisci:</p>' +
             '<span>' + comment + '</span>' +
             '</div>' +
             '</div>' +
             '</a>')
     }
 }
