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
  let ani = document.getElementsByClassName("projects")[0];
  let btn = document.getElementsByClassName("proj-btn")[0];

  btn.classList.toggle("web");
  if (btn.classList.contains("web")) {
    btn.children[0].innerText = "smartphone";
  } else {
    btn.children[0].innerText = "computer";
  }
}

document.addEventListener("scroll", toggleProjects);
document.addEventListener("resize", onWindowResize);
