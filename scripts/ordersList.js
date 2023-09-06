export const getOrders = async () => {

    const orderArray = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel")
    const orders = await orderArray.json()

    let ordersHTML = `
    <h2>Custom Car Orders</h2>
    `

    const arrayOfOrders = orders.map(
        (order) => {
            let orderPrice = order.paint.price + order.wheel.price + order.interior.price + order.technology.price

            return `
            <div>
                <p>A customer ordered a ${order.paint.name} car with ${order.wheel.name} wheels, ${order.interior.name} interior, and the ${order.technology.name} for a total cost of $${orderPrice}</p>
            </div>
            `
        }
    )

    ordersHTML += arrayOfOrders.join("")
    return ordersHTML
}