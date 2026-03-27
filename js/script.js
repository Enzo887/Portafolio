const emailBtn = document.querySelector(".email-copy")

emailBtn.addEventListener("click", () => {

    navigator.clipboard.writeText("cruzenzo.dev@gmail.com")
    emailBtn.classList.add("show")

    setTimeout(() => {
        emailBtn.classList.remove("show");
    }, 3000)
})
