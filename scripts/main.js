import { getInteriors } from "./interiors.js"
import { orderButton } from "./orderButton.js"
import { getOrders } from "./ordersList.js"
import { getPaints } from "./paints.js"
import { getTechnologies } from "./technologies.js"
import { getWheels } from "./wheels.js"

const render = async () => {

    let content = document.querySelector("#content")

    const paintHTML = getPaints()
    const interiorHTML = getInteriors()
    const techHTML = getTechnologies()
    const wheelHTML = getWheels()
    const orderButtonHTML = orderButton()
    const ordersListHTML = await getOrders()

    content.innerHTML = `
        <selection class="options">
            <div class="paintDiv">${paintHTML}</div>
            <div class="interiorDiv">${interiorHTML}</div>
            <div class="techDiv">${techHTML}</div>
            <div class="wheelDiv">${wheelHTML}</div>
        </selection>
        ${orderButtonHTML}
        ${ordersListHTML}
    `
}

render()

document.addEventListener("newOrderCreated", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})