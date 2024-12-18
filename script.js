const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector("nav")
const hamburgerIcon = document.querySelector(".fa-solid")

menuIcon.addEventListener("click", () => {
    if (hamburgerIcon.classList[1] === "fa-bars") {
        hamburgerIcon.classList.add("fa-plane")
        hamburgerIcon.classList.remove("fa-bars")
        menuList.style.display = "block" 
    } else {
        hamburgerIcon.classList.add("fa-bars")
        hamburgerIcon.classList.remove("fa-plane")
        menuList.style.display = "none"
    }
})