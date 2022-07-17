/* Variables used to hold elements targetted by the animation functions */
let mobi; // Mobile section
let web; // Web Section
let btn; // Button toggler

/* Variables used to hold sections of the webpage targetted by the animation functions */
let proj; // Project Section
let tech; // Stack Section

/* Constants used by the animation */
const CSS_ANIMATION_DELAY = 1100; // Delay used in ApplyAnimationDelay added to the CSS_DELAY_SEQUENCE. This is the delay (in ms) for the projects section before the appearance of the list of projects.
const CSS_DELAY_SEQUENCE = 200; // Delay used in ApplyAnimationDelay for every list of projects inside the projects section.
const CSS_MOBILE_MEDIA_QUERY_WIDTH = 650; // The size where the webpage starts changing into a small screen friendly version.
const CSS_CLASS_PROJECTS_ANIMATE = "projects-animate"; // Class used by Style.css for animating elements in the Projects Section.
const CSS_CLASS_PROJECTS_EXIT = "projects-exit"; // Class used by Style.css for animating exiting elements in the Projects Section.
const CSS_CLASS_TECH_ANIMATE = "tech-animate"; // Class used by Style.css for animating elements in the Stack Section
const CSS_CLASS_TECH_EXIT = "tech-exit"; // Class used by Style.css for animating exiting elements in the Stack Section
const CSS_CLASS_HIDDEN = "hidden"; // Class used by Style.css for animating Toggle Button to be hidden.
const CSS_CLASS_WEB = "web"; // Class used by Style.css for the Toggle Button State.
const CSS_CLASS_ACTIVE = "active"; // Class used by Style.css for setting the active state (Mobile/Web) in the Projects Section.

/* Variables used in keeping close check of the Animation States */
let timeout; // Timeout used in Projects Section
let timeout_tech; // Timeout used in Stack Section
let is_switching = false; // State used in Button toggler

// Used as an alternate to <a target="_blank"> for buttons that use onClick
function visit(link, isNewTab) {
  if (isNewTab ?? false) window.open(link);
  else location.href = link;
}

/**
 * The main function used in toggling the animation for the Projects Section.
 *
 * It is called every time a Scroll event occurs.
 *
 * This function handles the switching of the Toggle Button, Project Section to their alternating forms. (Project Section switches to either Web or Mobile)
 */
function toggleProjects() {
  let scrollAt = proj.getBoundingClientRect().top + 300; // The top of the Project Section plus additional pixels for adjustment.
  let scrollAtbtn = tech.getBoundingClientRect().top + 900; // The top of the Stack Section plus additional pixels for adjustment.
  if (scrollY > scrollAt) {
    // Lines of code for hiding / showing the Toggle Button
    btn.classList.remove(CSS_CLASS_HIDDEN);

    if (scrollY > scrollAtbtn) {
      btn.classList.add(CSS_CLASS_HIDDEN);
    }

    // Checks if the mobile / web sections are switching. This avoids weird behavior where
    // a certain element gets stuck when the user scrolls up while the animation is ongoing.
    if (is_switching) {
      return;
    }

    // Checks if the animation is supposed to disappear. Executes checks and cleanups to ensure that
    // A recall of the animation will not cause any weird behavior.
    if (proj.classList.contains(CSS_CLASS_PROJECTS_EXIT)) {
      if (timeout != null) {
        clearTimeout(timeout);
        timeout = null;
      }
      proj.classList.remove(CSS_CLASS_PROJECTS_EXIT);
      proj.classList.remove(CSS_CLASS_PROJECTS_ANIMATE);
    }

    // Applies the delay for the list of projects.
    if (window.innerWidth < CSS_MOBILE_MEDIA_QUERY_WIDTH) applyAnimationDelay();
    else applyAnimationDelay(CSS_ANIMATION_DELAY);

    // Adds the projects-animate which calls the appropriate animation in the Style.css
    proj.classList.add(CSS_CLASS_PROJECTS_ANIMATE);
  } else {
    // Line of code for hiding / showing the Toggle Button
    btn.classList.add(CSS_CLASS_HIDDEN);

    // Checks if the Project Section is currently animating then adds the projects-exit to call
    // for an exit animation.
    if (proj.classList.contains(CSS_CLASS_PROJECTS_ANIMATE)) {
      applyAnimationDelay(0, 0);
      proj.classList.add(CSS_CLASS_PROJECTS_EXIT);
      if (timeout == null) {
        if (window.innerWidth < CSS_MOBILE_MEDIA_QUERY_WIDTH) {
          timeout = setTimeout(() => removeProjectsAnimation(proj), 500);
        } else {
          timeout = setTimeout(() => removeProjectsAnimation(proj), 1500);
        }
      } else {
        // If the user was able to click the button while the animation is supposed to be hidden
        // these lines of code will switch the project section while avoiding a replay of the animation.
        if (is_switching) {
          clearTimeout(timeout);
          removeProjectsAnimation(proj);
          applyAnimationDelay();
          switchActiveProject();
        }
        is_switching = false;
      }
    }
  }
}

/**
 * Same functionalities as ToggleProjects() except with less code
 * since it uses a simpler animation.
 */
function toggleTech() {
  let scrollAt = tech.getBoundingClientRect().top + 900;

  if (scrollY > scrollAt) {
    if (tech.classList.contains(CSS_CLASS_TECH_EXIT)) {
      if (timeout_tech != null) {
        clearTimeout(timeout_tech);
        timeout_tech = null;
      }
      tech.classList.remove(CSS_CLASS_TECH_EXIT);
      tech.classList.remove(CSS_CLASS_TECH_ANIMATE);
    }

    tech.classList.add(CSS_CLASS_TECH_ANIMATE);
  } else {
    if (tech.classList.contains(CSS_CLASS_TECH_ANIMATE)) {
      tech.classList.add(CSS_CLASS_TECH_EXIT);
      if (timeout_tech == null) {
        if (window.innerWidth < CSS_MOBILE_MEDIA_QUERY_WIDTH) {
          timeout_tech = setTimeout(
            () => removeProjectsAnimation(tech, CSS_CLASS_TECH_EXIT),
            500
          );
        } else {
          timeout_tech = setTimeout(
            () => removeProjectsAnimation(tech, CSS_CLASS_TECH_ANIMATE),
            1500
          );
        }
      } else {
      }
    }
  }
}

// A convenience function for switching the Project Section state (Mobile / Web)
function switchActiveProject() {
  if (btn.classList.contains(CSS_CLASS_WEB)) {
    toggleProjectsAnimate(proj, mobi, web);
  } else {
    toggleProjectsAnimate(proj, web, mobi);
  }
}

// Convenience function for removing animation classes from a certain element.
function removeProjectsAnimation(ani, str) {
  ani.classList.remove(str ?? CSS_CLASS_PROJECTS_EXIT);
  ani.classList.remove(str ?? CSS_CLASS_PROJECTS_ANIMATE);
}

/**
 * This function is called when the Toggle Button is clicked.
 *
 * This function changes the look of the Toggle Button and allows switching
 * between web and mobile in the Projects Section.
 */
function toggleProjectsContent() {
  btn.classList.toggle(CSS_CLASS_WEB);
  if (btn.classList.contains(CSS_CLASS_WEB)) {
    btn.children[0].innerText = "smartphone";

    toggleProjectsAnimate(proj, mobi, web);
  } else {
    btn.children[0].innerText = "computer";

    toggleProjectsAnimate(proj, web, mobi);
  }
}

// Convenience function used to switch between the two states of the Project Section (Mobile or Web)
function toggleProjectsAnimate(ani, a, b) {
  if (!ani.classList.contains(CSS_CLASS_PROJECTS_ANIMATE)) {
    a.classList.remove(CSS_CLASS_ACTIVE);
    b.classList.add(CSS_CLASS_ACTIVE);
    return;
  }

  is_switching = true;

  applyAnimationDelay(0, 0);
  ani.classList.add(CSS_CLASS_PROJECTS_EXIT);

  timeout = setTimeout(() => {
    removeProjectsAnimation(ani);

    applyAnimationDelay();
    ani.classList.add(CSS_CLASS_PROJECTS_ANIMATE);

    a.classList.remove(CSS_CLASS_ACTIVE);
    b.classList.add(CSS_CLASS_ACTIVE);
    is_switching = false;
  }, 500);
}

/**
 * Convenience function for setting the delay in the list of projects under the Project Section.
 * This is used in both
 *
 * @param {int} additional - Time length of the running animation (Set when animation is running, 0 when animation is exiting)
 * @param {int} delayForEach - Time delay for each element in the list.
 */
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

/**
 * Function that initializes variables and sets the event listeners.
 * Function must always be called before every other animating function in order to avoid null variables.
 */
function init() {
  document.addEventListener("DOMContentLoaded", () => {
    mobi = document.querySelector("#mob-area");
    web = document.querySelector("#web-area");
    btn = document.querySelectorAll(".proj-btn")[0];
    proj = document.querySelectorAll(".projects")[0];

    tech = document.querySelector("#tech");
    applyAnimationDelay();
  });

  document.addEventListener("scroll", toggleProjects);
  document.addEventListener("scroll", toggleTech);
}

init();
