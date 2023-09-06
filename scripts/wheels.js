import { setWheel } from "./TransientState.js"

const wheelArray = await fetch("http://localhost:8088/wheels")
const wheels = await wheelArray.json()

export const getWheels = () => {
    document.addEventListener("change", changeHandler)

    let wheelHTML = `
    <h2>Wheels</h2>
    <select id="wheel">
        <option value="0" id="wheel">Select A Wheel...</option>
    `

    for (const wheel of wheels) {
        wheelHTML += `
            <option value="${wheel.id}" id="wheel">${wheel.name}</option>
        `
    }
    
    wheelHTML += `</select>`
    return wheelHTML
}

const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "wheel") {
        console.log("Selected WheelID: " + changeEvent.target.value)
        setWheel(parseInt(changeEvent.target.value))
    }
}