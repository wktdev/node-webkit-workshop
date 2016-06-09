$(function() {

    var userData = undefined;

    $("form").on("submit", function(event) {
        event.preventDefault();
        userData = $(".user-data").val();
        $("ul").append("<li>" + userData + "</li>");
        $(".user-data").val("");


    });


    $("ul").on("click", "li", function() {

        $(this).remove();
    });


    $("ul").on("mouseover", "li", function() {

        $(this).addClass("selected");
    });


    $("ul").on("mouseout", "li", function() {

        $(this).removeClass("selected");
    });



})