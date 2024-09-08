let resumeSec = document.querySelector(".resume") as HTMLOptionElement
let headerBtn = document.querySelector(".header-btn") as HTMLButtonElement
let form = document.querySelector(".form") as HTMLFormElement

form.style.display = "none"

headerBtn.addEventListener("click", () => {
    resumeSec.style.display = "none"
    form.style.display = "block"

    // console.log("hell0");

})