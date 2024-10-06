document.addEventListener("DOMContentLoaded", function () {
  let modal = document.getElementById("impressumModal");
  let btn = document.getElementById("openModalBtn");
  let span = document.getElementsByClassName("closeBtn")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
