$(document).ready(function() {
    console.log("ready!");

    $("#about").click(function() {
        $('html,body').animate({
                scrollTop: $("#aboutd").offset().top
            },
            'slow');
    });
    $("#skills").click(function() {
        $('html,body').animate({
                scrollTop: $("#skillsd").offset().top
            },
            'slow');
    });
    $("#education").click(function() {
        $('html,body').animate({
                scrollTop: $("#educationd").offset().top
            },
            'slow');
    });
    $("#experience").click(function() {
        $('html,body').animate({
                scrollTop: $("#experienced").offset().top
            },
            'slow');
    });
    $("#contact").click(function() {
        $('html,body').animate({
                scrollTop: $("#contactd").offset().top
            },
            'slow');
    });
});