var mdlbigimage = $("#mdlbig-pic");
var mdlthumbs = $("#mdlthumbs");
var syncedSecondary = true;
mdlbigimage
    .owlCarousel({
        rtl: true,
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: [
            '<i class="fal fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fal fa-chevron-right" aria-hidden="true"></i>'
        ],

    })
    .on("changed.owl.carousel", syncPosition);
mdlthumbs
    .on("initialized.owl.carousel", function() {
        mdlthumbs
            .find(".owl-item")
            .eq(0)
            .addClass("current");

    })
    .owlCarousel({
        rtl: true,
        items: 5,
        dots: false,
        nav: false,
        navText: [
            '<i class="fal fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fal fa-chevron-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 3,

            },
            450: {
                items: 3,

            },
            700: {
                items: 4,

            },
            1200: {
                items: 5,

            }
        }


    })
    .on("changed.owl.carousel", syncPosition2);

function syncPosition(el) {
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
    if (current < 0) {
        current = count;
    }
    if (current > count) {
        current = 0;
    }

    mdlthumbs
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
    var onscreen = mdlthumbs.find(".owl-item.active").length - 1;
    var start = mdlthumbs
        .find(".owl-item.active")
        .first()
        .index();
    var end = mdlthumbs
        .find(".owl-item.active")
        .last()
        .index();
    if (current > end) {
        mdlthumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
        mdlthumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
}

function syncPosition2(el) {
    if (syncedSecondary) {
        var number = el.item.index;
        mdlbigimage.data("owl.carousel").to(number, 300, true);
    }
}
mdlthumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    mdlbigimage.data("owl.carousel").to(number, 300, true);
});