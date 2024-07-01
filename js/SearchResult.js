$('.search-mobile-header form input').on('click', function() {
    $(this).parents('.search-mobile-header').addClass('show-result').find('.search-result').fadeIn(0);
    $(".overlay-search-mobile-header").css({ "opacity": "1", "visibility": "visible" });
})
$('.search-mobile-header form input').keyup(function() {
    $(this).parents('.search-mobile-header').addClass('show-result').find('.search-result').fadeIn(0);
    $(this).parents('.search-mobile-header').find('.search-result-list').fadeIn(0);
    if ($(this).val().length == 0) {

        $(this).parents('.search-mobile-header').removeClass('show-result').find('.search-result').fadeOut(0);
        $(this).parents('.search-mobile-header').find('.search-result-list').fadeOut(0);
        $(this).parents('.search-mobile-header').removeClass('show-result');
    } else {

        $(this).parents('.search-mobile-header').find('.search-result').fadeIn(0);
        $(this).parents('.search-mobile-header').find('.search-result-list').fadeIn(0);
    }
});
$(document).click(function(e) {
    if ($(e.target).is('.search-mobile-header *')) return;
    $('.search-result').hide();
    $('.search-mobile-header').removeClass('show-result');
    $(".overlay-search-mobile-header").css({ "opacity": "0", "visibility": "hidden" });
});