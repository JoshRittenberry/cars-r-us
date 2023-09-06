import { setTechnology } from "./TransientState.js"

const techArray = await fetch("http://localhost:8088/technologies")
const technologies = await techArray.json()

export const getTechnologies = () => {
    document.addEventListener("change", changeHandler)

    let techHTML = `
    <h2>Technologies</h2>
    <select id="tech">
        <option value="0" id="tech">Select A Technology...</option>
    `

    for (const tech of technologies) {
        techHTML += `
            <option value="${tech.id}" id="tech">${tech.name}</option>
        `
    }
    
    techHTML += `</select>`
    return techHTML
}

const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "tech") {
        console.log("Selected TechID: " + changeEvent.target.value)
        setTechnology(parseInt(changeEvent.target.value))
    }
}