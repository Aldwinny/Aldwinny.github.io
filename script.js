let timeout;

/**
 * Function that toggles animation classes for certain
 */
function toggleProjects() {
  let ani = document.getElementsByClassName("projects")[0];
  if (scrollY > 100) {
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
        timeout = setTimeout(() => removeProjectsAnimation(ani), 1500);
      }
    }
  }
}

function removeProjectsAnimation(ani) {
  ani.classList.remove("projects-exit");
  ani.classList.remove("projects-animate");
}

document.addEventListener("scroll", () => toggleProjects());
