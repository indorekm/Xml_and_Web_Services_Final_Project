﻿// Open Side Navigation
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("menuIcon").style.display = "none";
}

// Close Side Navigation 
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menuIcon").style.display = "block";
}

// Carousel for changing cover pictures
(function () {

    var myIndex = 0;
    if (document.getElementsByClassName("mySlides").length) {
        carousel();
    }

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }

})();