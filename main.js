const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  console.log("het");
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  // We switch the attribute that indicates whether the menu should be visible
  primaryNav.toggleAttribute("data-visible");

  // We switch the attribute the attribute on the primary header that idicates whether the
  // overlay should be visible
  primaryHeader.toggleAttribute("data-overlay");
});

// slider
const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: true,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    480: {
      dots: false,
    },
  },
});
