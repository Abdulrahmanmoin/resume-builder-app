"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
let resumeSec = document.querySelector(".resume");
let headerBtn = document.querySelector(".header-btn");
let form = document.querySelector(".form");
form.style.display = "none";
headerBtn.addEventListener("click", () => {
    resumeSec.style.display = "none";
    form.style.display = "block";
    // console.log("hell0");
});
