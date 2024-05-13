import {router} from "/src/js/app.js"
import {getMainTitle} from "/src/js/components/mainTitle/mainTitle.js"
import {getDesc} from "/src/js/components/desc/desc.js"

// Корзина
export function getBasketPage() {
    const page = document.createElement("div")
    page.classList.add("page", "basket-page", "container")

    const mainTitle = getMainTitle("Корзина")
    const desc = getDesc("Страница в разработке")
    
    // ССылка оформления заказа 
    let linkOrder = document.createElement("a")
    linkOrder.href = "/order"
    linkOrder.classList.add("btn")
    linkOrder.textContent = "Оформление заказа"

linkOrder.addEventListener("click", function (event) {
    event.preventDefault()
    router.navigate("/order")
})

    page.append(mainTitle, desc, linkOrder)
    return page
}