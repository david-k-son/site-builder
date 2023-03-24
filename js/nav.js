const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  if (!primaryNav.classList.contains("mobile-nav-open")) {
    primaryNav.classList.add("mobile-nav-open");
    navToggle.style.backgroundImage = "url('../assets/shared/icon-close.svg')";
  } else {
    primaryNav.classList.remove("mobile-nav-open");
    navToggle.style.backgroundImage =
      "url('../assets/shared/icon-hamburger.svg')";
  }
});
