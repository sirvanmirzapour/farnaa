var content = $('.read-more-comment');
var btn = $('.btn-read-more-comment');
btn.on('click', function(e) {
    e.preventDefault();
    if (content.css('display') !== 'none') {
        content.hide(500)
        $(this).text('مشاهده بیشتر')
    } else {
        content.show(500)
        $(this).text('بستن')
    }
});