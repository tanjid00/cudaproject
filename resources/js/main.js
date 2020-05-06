$(document).ready(function() {

    //Sticky Menu
    $('.js--services-section').waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

    //Active link
    $("nav ul li a").click(function() {
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });
    $("nav a img.logo").click(function() {
        $("nav ul li a").removeClass("active");
        $("nav ul li:first-child a").addClass("active");
    });

    //Mixitup(portfolio section)
    var mixer = mixitup('.container');
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}