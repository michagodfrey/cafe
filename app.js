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

// alert

function showPhNums() {
  alert("Call -\nLambasa: 808 2204\nSavusavu: 907 8562");
}
