import { setPaint } from "./TransientState.js"

const paintArray = await fetch("http://localhost:8088/paints")
const paints = await paintArray.json()

export const getPaints = () => {
    document.addEventListener("change", changeHandler)

    let paintHTML = `
    <h2>Paint</h2>
    <select id="paint">
        <option value="0" id="paint">Select A Paint...</option>
    `

    for (const paint of paints) {
        paintHTML += `
            <option value="${paint.id}" id="paint">${paint.name}</option>
        `
    }
    
    paintHTML += `</select>`
    return paintHTML
}

const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "paint") {
        console.log("Selected PaintID: " + changeEvent.target.value)
        setPaint(parseInt(changeEvent.target.value))
    }
}