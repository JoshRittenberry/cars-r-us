import { setInerior } from "./TransientState.js"

const interiorArray = await fetch("http://localhost:8088/interiors")
const interiors = await interiorArray.json()

export const getInteriors = () => {
    document.addEventListener("change", changeHandler)

    let interiorHTML = `
    <h2>Interior</h2>
    <select id="interior">
        <option value="0" id="interior">Select An Interior...</option>
    `

    for (const interior of interiors) {
        interiorHTML += `
            <option value="${interior.id}" id="interior">${interior.name}</option>
        `
    }
    
    interiorHTML += `</select>`
    return interiorHTML
}

const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
        console.log("Selected InteriorID: " + changeEvent.target.value)
        setInerior(parseInt(changeEvent.target.value))
    }
}