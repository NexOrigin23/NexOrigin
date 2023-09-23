darkMode();

var navLinks = document.getElementById("Links");


var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
  loader.style.display ="none";
})

function showMenu() {
  navLinks.style.right = "0";
  navLinks.style.display = "block";
}

function hideMenu() {
  navLinks.style.right = "-220px";
  navLinks.style.display = "none";
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
