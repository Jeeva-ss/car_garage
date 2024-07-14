document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", () => {
    const isMenuOpen = mobileMenu.style.display === "block";

    // Toggle menu visibility
    mobileMenu.style.display = isMenuOpen ? "none" : "block";

    // Toggle icons
    menuIcon.style.display = isMenuOpen ? "block" : "none";
    closeIcon.style.display = isMenuOpen ? "none" : "block";
  });

  // Close menu when clicking outside of it
  document.addEventListener("click", (event) => {
    if (
      !menuButton.contains(event.target) &&
      !mobileMenu.contains(event.target)
    ) {
      mobileMenu.style.display = "none";
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  });
});