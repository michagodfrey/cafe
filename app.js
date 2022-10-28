// booking modal
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

function openMoodal() {
  modal.style.display = "grid";
}

modalClose.onclick = function() {
  modal.style.display = "none";
}

// mobile menu overlay
function dropdown() {
  document.querySelector(".dropdown-links").classList.toggle("show");
}

// close modal or mobile menu on click
window.onclick = function(event) {

  if (event.target.matches('.modal')) {
    modal.style.display = "none";
  }

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
