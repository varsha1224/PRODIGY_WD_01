document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#555";
        } else {
            navbar.style.backgroundColor = "#333";
        }
    });

    navbar.addEventListener("mouseover", function () {
        navbar.style.backgroundColor = "#777"; 
    });

    navbar.addEventListener("mouseout", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#555";
        } else {
            navbar.style.backgroundColor = "#333";
        }
    });
});
