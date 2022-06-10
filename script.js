function toggleanimate() {
  let ani = document.getElementsByClassName("projects")[0];

  if (!ani.classList.contains("projects-animate")) {
    ani.classList.add("projects-animate");
  } else {
    if (!ani.classList.contains("projects-exit")) {
      ani.classList.add("projects-exit");
    } else {
      ani.classList.remove("projects-exit");
      ani.classList.remove("projects-animate");
    }
  }
}
