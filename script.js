let timeout;

const CSS_ANIMATION_DELAY = 1100;
const CSS_DELAY_SEQUENCE = 200;

/**
 * Function that toggles animation classes for certain
 */
function toggleProjects() {
  let ani = document.getElementsByClassName("projects")[0];

  let scrollAt = ani.getBoundingClientRect().top + 100;

  if (scrollY > scrollAt) {
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
      }
    }
  }
}

function removeProjectsAnimation(ani) {
  ani.classList.remove("projects-exit");
  ani.classList.remove("projects-animate");
}

function toggleProjectsContent() {
  let ani = document.querySelectorAll(".projects")[0];

  let mobi = document.querySelector("#mob-area");
  let web = document.querySelector("#web-area");

  let btn = document.querySelectorAll(".proj-btn")[0];

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

  applyAnimationDelay(0, 0);
  ani.classList.add("projects-exit");

  timeout = setTimeout(() => {
    removeProjectsAnimation(ani);

    applyAnimationDelay();
    ani.classList.add("projects-animate");

    a.classList.remove("active");
    b.classList.add("active");
  }, 500);
}

function applyAnimationDelay(additional, delayForEach) {
  let [mob, web] = [
    document.querySelector("#mob-area"),
    document.querySelector("#web-area"),
  ];

  let mob_divs = document.querySelectorAll(
    "#mob-area > div.text-card, #mob-area > div.text-card-2"
  );
  let web_divs = document.querySelectorAll(
    "#web-area > div.text-card, #web-area > div.text-card-2"
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
    applyAnimationDelay();
  });

  document.addEventListener("scroll", toggleProjects);
}

init();
