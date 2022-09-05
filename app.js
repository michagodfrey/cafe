// dropdown menu
function dropdown() {
  document.querySelector(".dropdown-links").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    const dropdowns = document.querySelectorAll(".dropdown-links");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// location slider
let slideIndex = 1;

showLocation(slideIndex);

function plusLoc(n) {
  showLocation(slideIndex += n);
}

function showLocation(n) {
  const slide = document.getElementsByClassName("locationSlide");
  if (n > slide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slide.length}
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[slideIndex-1].style.display = "block";
}

function currentLoc(n) {
  showLocation(slideIndex = n);
}

function showLocation(n) {

  const slide = document.getElementsByClassName("locationSlide");
  const locs = document.getElementsByClassName("loc");
  if (n > slide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slide.length}
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  for (i = 0; i < locs.length; i++) {
    locs[i].className = locs[i].className.replace("active", "");
  }
  slide[slideIndex-1].style.display = "block";
  locs[slideIndex-1].className += " active";
}
