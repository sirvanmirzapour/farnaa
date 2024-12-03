function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
//////////////////////////////////////////////// New Products ////////////////////////////////////////////////

$(".list-products .owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    items: 3,
    nav: true,
    dots: false,
    navText: ["<i class='fal fa-chevron-right'></i>", "<i class='fal fa-chevron-left'></i>"],
    responsive: {
        0: {
            items: 1,

        },
        500: {
            items: 2,

        },
        1200: {
            items: 4,

        }
    }

});