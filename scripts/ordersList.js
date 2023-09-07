export const getOrders = async () => {

    const orderArray = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel&_expand=vehicle")
    const orders = await orderArray.json()

    let ordersHTML = `
    <h2>Custom Car Orders</h2>
    `

    const arrayOfOrders = orders.map(
        (order) => {

            let orderPrice = null
            
            if (order.vehicle.id === 1) {
                orderPrice = ((order.paint.price + order.wheel.price + order.interior.price + order.technology.price) * 1).toFixed(2)
            } else if (order.vehicle.id === 2) {
                orderPrice = ((order.paint.price + order.wheel.price + order.interior.price + order.technology.price) * 1.5).toFixed(2)
            } else if (order.vehicle.id === 3) {
                orderPrice = ((order.paint.price + order.wheel.price + order.interior.price + order.technology.price) * 2.25).toFixed(2)
            }

            return `
            <div>
                <p>A customer ordered a ${order.paint.name} ${order.vehicle.type} with ${order.wheel.name} wheels, ${order.interior.name} interior, and the ${order.technology.name} for a total cost of $${orderPrice}</p>
            </div>
            `
        }
    )

    ordersHTML += arrayOfOrders.join("")
    return ordersHTML
}