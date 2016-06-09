$(function() {


    $(".main").on("click", function() {
        $(".current-page").empty();
        $(".current-page").load("pages/main.html #main");
    });

    $(".about").on("click", function() {
        $(".current-page").empty();
        $(".current-page").load("pages/about.html #about");
    });

    $(".stuff").on("click", function() {
        $(".current-page").empty();
        $(".current-page").load("pages/stuff.html #stuff");

    });


});