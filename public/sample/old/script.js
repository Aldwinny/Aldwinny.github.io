
function scrollToWeb() {
    var web = document.getElementById("web");
    web.scrollIntoView({
        behavior: "smooth"
    });
}

function scrollToMob() {
    var mob = document.getElementById("mob");
    mob.scrollIntoView({
        behavior: "smooth"
    });
}

function scrollToOthers() {
    var others = document.getElementById("others");
    others.scrollIntoView({
        behavior: "smooth"
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}