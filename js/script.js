function toggleTheme() {
    document.body.classList.toggle("light-theme");
    const icon = document.querySelector(".theme-toggle i");
    if (document.body.classList.contains("light-theme")) {
        icon.className = "fas fa-sun";
    } else {
        icon.className = "fas fa-moon";
    }
}
