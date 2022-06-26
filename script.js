let mobi;
let web;
let btn;
let ani;

let tech;

const CSS_ANIMATION_DELAY = 1100;
const CSS_DELAY_SEQUENCE = 200;

let timeout;
let timeout_tech;
let is_switching = false;

function visit(link, isNewTab) {
  if (isNewTab ?? false) window.open(link);
  else location.href = link;
}

/**
 * Function that toggles animation classes for certain
 */
function toggleProjects() {
  let scrollAt = ani.getBoundingClientRect().top + 300;
  if (scrollY > scrollAt) {
    if (is_switching) {
      return;
    }

    if (ani.classList.contains("projects-exit")) {
      if (timeout != null) {
        clearTimeout(timeout);
        timeout = null;
      }
      ani.classList.remove("projects-exit");
      ani.classList.remove("projects-animate");
    }

    if (window.innerWidth < 650) applyAnimationDelay();
    else applyAnimationDelay(CSS_ANIMATION_DELAY);
    ani.classList.add("projects-animate");
  } else {
    if (ani.classList.contains("projects-animate")) {
      applyAnimationDelay(0, 0);
      ani.classList.add("projects-exit");
      if (timeout == null) {
        if (window.innerWidth < 650) {
          timeout = setTimeout(() => removeProjectsAnimation(ani), 500);
        } else {
          timeout = setTimeout(() => removeProjectsAnimation(ani), 1500);
        }
      } else {
        if (is_switching) {
          clearTimeout(timeout);
          removeProjectsAnimation(ani);
          applyAnimationDelay();
          switchActiveProject();
        }
        is_switching = false;
      }
    }
  }
}

function toggleTech() {
  let scrollAt = tech.getBoundingClientRect().top + 900;

  if (scrollY > scrollAt) {
    if (tech.classList.contains("tech-exit")) {
      if (timeout_tech != null) {
        clearTimeout(timeout_tech);
        timeout_tech = null;
      }
      tech.classList.remove("tech-exit");
      tech.classList.remove("tech-animate");
    }

    tech.classList.add("tech-animate");
  } else {
    if (tech.classList.contains("tech-animate")) {
      tech.classList.add("tech-exit");
      if (timeout_tech == null) {
        if (window.innerWidth < 650) {
          timeout_tech = setTimeout(
            () => removeProjectsAnimation(tech, "tech-exit"),
            500
          );
        } else {
          timeout_tech = setTimeout(
            () => removeProjectsAnimation(tech, "tech-animate"),
            1500
          );
        }
      } else {
      }
    }
  }
}

function switchActiveProject() {
  if (btn.classList.contains("web")) {
    toggleProjectsAnimate(ani, mobi, web);
  } else {
    toggleProjectsAnimate(ani, web, mobi);
  }
}

function removeProjectsAnimation(ani, str) {
  ani.classList.remove(str ?? "projects-exit");
  ani.classList.remove(str ?? "projects-animate");
}

function toggleProjectsContent() {
  btn.classList.toggle("web");
  if (btn.classList.contains("web")) {
    btn.children[0].innerText = "smartphone";

    toggleProjectsAnimate(ani, mobi, web);
  } else {
    btn.children[0].innerText = "computer";

    toggleProjectsAnimate(ani, web, mobi);
  }
}

function toggleProjectsAnimate(ani, a, b) {
  if (!ani.classList.contains("projects-animate")) {
    a.classList.remove("active");
    b.classList.add("active");
    return;
  }

  is_switching = true;

  applyAnimationDelay(0, 0);
  ani.classList.add("projects-exit");

  timeout = setTimeout(() => {
    removeProjectsAnimation(ani);

    applyAnimationDelay();
    ani.classList.add("projects-animate");

    a.classList.remove("active");
    b.classList.add("active");
    is_switching = false;
  }, 500);
}

function applyAnimationDelay(additional, delayForEach) {
  let mob_divs = document.querySelectorAll(
    "#mob-area div.tc-container, #mob-area div.tc-container-2"
  );
  let web_divs = document.querySelectorAll(
    "#web-area div.tc-container, #web-area div.tc-container-2"
  );

  for (let i = 0; i < mob_divs.length; i++) {
    let del =
      parseInt(additional ?? 0) +
      parseInt(delayForEach ?? CSS_DELAY_SEQUENCE) * (i + 1);
    mob_divs[i].style.animationDelay = del.toString() + "ms";
  }

  for (let i = 0; i < web_divs.length; i++) {
    let del =
      parseInt(additional ?? 0) +
      parseInt(delayForEach ?? CSS_DELAY_SEQUENCE) * (i + 1);
    web_divs[i].style.animationDelay = del.toString() + "ms";
  }
}

function init() {
  document.addEventListener("DOMContentLoaded", () => {
    mobi = document.querySelector("#mob-area");
    web = document.querySelector("#web-area");
    btn = document.querySelectorAll(".proj-btn")[0];
    ani = document.querySelectorAll(".projects")[0];

    tech = document.querySelector("#tech");
    applyAnimationDelay();
  });

  document.addEventListener("scroll", toggleProjects);
  document.addEventListener("scroll", toggleTech);
}

init();
