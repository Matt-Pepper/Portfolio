function scrollToSection(section) {
    let anchor = document.getElementById(section).offsetTop;
    window.scrollTo({
        top: anchor - 105,
        behavior: "smooth"
    });
}