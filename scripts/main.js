//navbar toggle
const nav_bar = document.querySelector(".nav_bar");
const toggle_icon = document.querySelector(".fa-bars");

toggle_icon.addEventListener("click", () => {
    nav_bar.classList.toggle("active");
})