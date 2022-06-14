let timeout;

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

    ani.classList.add("projects-animate");
  } else {
    if (ani.classList.contains("projects-animate")) {
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

function onWindowResize() {
  if (window.innerWidth < 650) {
    let act = document.querySelectorAll(".mob-area")[0];

    act.classList.add("active");
  }
}

function toggleProjectsContent() {
  let ani = document.querySelectorAll(".projects")[0];

  let mobi = document.querySelector("#mob-area");
  let web = document.querySelector("#web-area");

  let btn = document.querySelectorAll(".proj-btn")[0];

  btn.classList.toggle("web");
  if (btn.classList.contains("web")) {
    btn.children[0].innerText = "smartphone";

    ani.classList.add("projects-exit");
    timeout = setTimeout(() => {
      removeProjectsAnimation(ani);
      ani.classList.add("projects-animate");
      mobi.classList.remove("active");
      web.classList.add("active");
    }, 500);
  } else {
    btn.children[0].innerText = "computer";

    ani.classList.add("projects-exit");
    timeout = setTimeout(() => {
      removeProjectsAnimation(ani);
      ani.classList.add("projects-animate");
      web.classList.remove("active");
      mobi.classList.add("active");
    }, 500);
  }
}

document.addEventListener("scroll", toggleProjects);
document.addEventListener("resize", onWindowResize);
