// script.js

window.onload = function () {
  // Automatically show the popup bar when the page loads
  gsap.to("#popupBar", { y: 100, duration: 1, ease: "bounce.out" });
};

document.getElementById("closeBtn").addEventListener("click", function () {
  // Close the popup bar when the Close button is clicked
  gsap.to("#popupBar", { y: -100, duration: 1, ease: "power2.inOut" });
});
