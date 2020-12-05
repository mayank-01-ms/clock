let darkMode = localStorage.getItem("darkMode");
if (darkMode === null){
    darkMode = "light";
}
const body = document.querySelector("body");
const metaTheme = document.querySelector("meta[name = 'theme-color']");

body.classList.add(darkMode);

if (darkMode == "dark") {
    metaTheme.setAttribute("content", "#111111");
} else {
    metaTheme.setAttribute("content", "#fff");
}
