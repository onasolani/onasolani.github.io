// nav starts here

$("#toggle").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$("#resize ul li a").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$(".close-btn").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

// nav ends here

// nav animation

// TweenMax.from("#brand", 1, {
//     delay: 0.4,
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut
// })

// TweenMax.from(".media-title", 1, {
//     delay: 0.6,
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut
// })

// TweenMax.from(".copyright, .hero-projects", 1, {
//     delay: 0.8,
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut
// })

// TweenMax.staggerFrom("#menu li a, .media li a", 1, {
//     delay: 0.4,
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut
// }, 0.1);



// nav animation ends


