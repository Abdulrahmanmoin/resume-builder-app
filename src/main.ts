const resumeSec = document.querySelector(".resume") as HTMLOptionElement
const headerBtn = document.querySelector(".header-btn") as HTMLButtonElement
const form = document.querySelector(".form") as HTMLFormElement

const nameField = document.querySelector(".name-field") as HTMLInputElement
const phoneNumField = document.querySelector(".phone-num-field") as HTMLInputElement
const educationField = document.querySelector(".education-field") as HTMLInputElement
const skillsField = document.querySelector(".skills-field") as HTMLInputElement
const designationField = document.querySelector(".designation-field") as HTMLInputElement
const experienceField = document.querySelector(".experience-field") as HTMLInputElement

const nameResume = document.querySelector(".name-resume") as HTMLInputElement
const designationResume = document.querySelector(".designation-resume") as HTMLInputElement
const phoneNumResume = document.querySelector(".phone-num-resume") as HTMLInputElement
const skillResume = document.querySelector(".skill-resume") as HTMLInputElement
const eduResume = document.querySelector(".edu-resume") as HTMLInputElement
const experienceResume = document.querySelector(".experience-resume") as HTMLInputElement

const generateBtn = document.querySelector(".generate-btn") as HTMLInputElement

form.style.display = "none"

headerBtn.addEventListener("click", (event: MouseEvent): void => {
    resumeSec.style.display = "none"
    form.style.display = "block"
    headerBtn.style.display = "none";



})


generateBtn.addEventListener("click", (e: MouseEvent) : void => {

    e.preventDefault()

    form.style.display = "none"
    resumeSec.style.display = "block"

    headerBtn.style.display = "block";
    headerBtn.textContent = "Edit your resume";


    nameResume.textContent = nameField.value;
    phoneNumResume.textContent = phoneNumField.value;
    designationResume.textContent = designationField.value;
    skillResume.textContent = skillsField.value;
    eduResume.textContent = educationField.value;
    experienceResume.textContent = experienceField.value;
})

