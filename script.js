var typed = new Typed(".multiple-text", {
    strings: [
      "FrontEnd Development ",
      "Backend Development",
      "Machine Learning",
      "Data Science",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".Projects-section").forEach(function (section) {
        if (isElementInViewport(section)) {
          section.classList.remove("animated");
        } else {
          section.classList.add("animated");
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".AboutMe").forEach(function (section) {
        if (isElementInViewport(section)) {
          section.classList.remove("animated");
        } else {
          section.classList.add("animated");
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".Skills-section").forEach(function (section) {
        if (isElementInViewport(section)) {
          section.classList.remove("animated");
        } else {
          section.classList.add("animated");
        }
      });
    });
  });
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function Shop() {
    open("https://github.com/keerthireddy-28/CODSOFT/tree/main/Landingpage");
  }
  function Imagecolor() {
    open("https://github.com/keerthireddy-28/GenerativeAI/blob/main/GenAI_CourseProject_Team8.ipynb");
  }
  function resume() {
    open(
        "https://drive.google.com/file/d/1h-An7Djb1jB4nHZa8Dqdk94yTyb78hq2/view?usp=sharing"
    );
  }