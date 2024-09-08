"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
const resumeSec = document.querySelector(".resume");
const headerBtn = document.querySelector(".header-btn");
const form = document.querySelector(".form form");
const nameField = document.querySelector(".name-field");
const phoneNumField = document.querySelector(".phone-num-field");
const educationField = document.querySelector(".education-field");
const skillsField = document.querySelector(".skills-field");
const designationField = document.querySelector(".designation-field");
const experienceField = document.querySelector(".experience-field");
const genResumeHeading = document.querySelector(".gen-resume-heading");
const nameResume = document.querySelector(".name-resume");
const designationResume = document.querySelector(".designation-resume");
const phoneNumResume = document.querySelector(".phone-num-resume");
const skillResume = document.querySelector(".skill-resume");
const eduResume = document.querySelector(".edu-resume");
const experienceResume = document.querySelector(".experience-resume");
const generateBtn = document.querySelector(".generate-btn");
form.style.display = "none";
genResumeHeading.style.display = "none";
headerBtn.addEventListener("click", (event) => {
    resumeSec.style.display = "none";
    form.style.display = "block";
    genResumeHeading.style.display = "block";
    headerBtn.style.display = "none";
});
generateBtn.addEventListener("click", (e) => {
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    e.preventDefault();
    form.style.display = "none";
    genResumeHeading.style.display = "none";
    resumeSec.style.display = "block";
    headerBtn.style.display = "block";
    headerBtn.textContent = "Edit your resume";
    nameResume.textContent = nameField.value;
    phoneNumResume.textContent = phoneNumField.value;
    designationResume.textContent = designationField.value;
    skillResume.textContent = skillsField.value;
    eduResume.textContent = educationField.value;
    experienceResume.textContent = experienceField.value;
});
