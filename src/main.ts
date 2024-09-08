const resumeSec = document.querySelector(".resume") as HTMLElement
const headerBtn = document.querySelector(".header-btn") as HTMLButtonElement
const form = document.querySelector(".form form") as HTMLFormElement

const nameField = document.querySelector(".name-field") as HTMLInputElement
const phoneNumField = document.querySelector(".phone-num-field") as HTMLInputElement
const educationField = document.querySelector(".education-field") as HTMLInputElement
const skillsField = document.querySelector(".skills-field") as HTMLInputElement
const designationField = document.querySelector(".designation-field") as HTMLInputElement
const experienceField = document.querySelector(".experience-field") as HTMLInputElement

const genResumeHeading = document.querySelector(".gen-resume-heading") as HTMLHeadingElement;

const nameResume = document.querySelector(".name-resume") as HTMLHeadingElement
const designationResume = document.querySelector(".designation-resume") as HTMLParagraphElement
const phoneNumResume = document.querySelector(".phone-num-resume") as HTMLParagraphElement
const skillResume = document.querySelector(".skill-resume") as HTMLParagraphElement
const eduResume = document.querySelector(".edu-resume") as HTMLParagraphElement
const experienceResume = document.querySelector(".experience-resume") as HTMLParagraphElement

const generateBtn = document.querySelector(".generate-btn") as HTMLButtonElement

form.style.display = "none"
genResumeHeading.style.display = "none"

headerBtn.addEventListener("click", (event: MouseEvent): void => {
    resumeSec.style.display = "none"
    form.style.display = "block"
    genResumeHeading.style.display = "block"


    headerBtn.style.display = "none";



})


generateBtn.addEventListener("click", (e: MouseEvent): void => {

    if (!form.checkValidity()) {
        
        form.reportValidity();
        return
    }

    e.preventDefault()

    form.style.display = "none"
    genResumeHeading.style.display = "none"

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

