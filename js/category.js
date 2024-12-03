   //////////////////////////////////////////////// Blog ////////////////////////////////////////////////

   $(".category-carousel .owl-carousel").owlCarousel({
       rtl: true,
       loop: true,
       items: 10,
       nav: true,
       dots: false,
       navText: [
           "<i class='fal fa-chevron-right'></i>",
           "<i class='fal fa-chevron-left'></i>"
       ],

       responsive: {
           0: {
               items: 3,

           },
           450: {
               items: 4,

           },
           700: {
               items: 6,

           },
           1200: {
               items: 8,

           }
       }

   });