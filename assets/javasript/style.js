// Fuction for mobile menu
function mobileMenu() {
    var x = document.getElementById("mobile-nav");
    if (x.style.visibility === "visible") {
        x.style.animation = "moveUp 1s";
        x.style.visibility = "hidden";
    } else {
        x.style.visibility = "visible";
        x.style.animation = "moveDown 1s";
    }
}