$(document).ready(function() {






    $(document).ready(function() {
        $(".hmrhadd").click(function() {
            $(".hmrhadd").hide(90);
            $(".hmrhremovemain").show(90);
        });
        $(".hmrhremovemain").click(function() {
            $(".hmrhadd").show(90);
            $(".hmrhremovemain").hide(90);
        });
    });
});