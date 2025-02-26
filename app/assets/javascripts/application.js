document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
  
    if (menuIcon && closeIcon && sidebar) {
      menuIcon.addEventListener("click", function () {
        sidebar.style.left = "0";
      });
  
      closeIcon.addEventListener("click", function () {
        sidebar.style.left = "-250px";
      });
    }
  });
  
  