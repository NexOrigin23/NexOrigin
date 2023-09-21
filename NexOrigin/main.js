darkMode();

var navLinks = document.getElementById("Links");

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

let dubaiText = document.getElementById('dubaitext');

let burjkhalifa = document.getElementById('burjkhalifa');

let stars = document.getElementById('stars');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  dubaiText.style.left =value * -2 + 'px';
  burjkhalifa.style.top =value * 1 + 'px';
})

const enchace = id =>{
  const element = document.getElementById(id),
  text = element.innerHTML.split("");

  element.innerHTML = "";

  text.forEach(letter=>{
    const span = document.createElement("span");

    span.className="letter";

    span.innerHTML =letter;
    element.appendChild(span);
  });
}