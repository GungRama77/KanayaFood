const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

// Toggle menu visibility on click for mobile
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  menuList.classList.toggle("visible");
});

// Ensure navbar resets to default desktop view when resizing
// window.addEventListener("resize", () => {
//   if (window.innerWidth > 768) {
//     // Remove mobile-specific classes
//     menuList.classList.remove("hidden", "visible");
//     // Set display to flex for desktop layout
//     menuList.style.display = "flex";
//   } else {
//     // Hide the menu by default on mobile
//     menuList.style.display = "none";
//   }
// });
