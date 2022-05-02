// nav starts here

$("#toggle").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
    $("#scroll").toggleClass("scroll");
});

$("#resize ul li a").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
    $("#scroll").toggleClass("scroll");
});

$(".close-btn").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
    $("#scroll").toggleClass("scroll");
});

