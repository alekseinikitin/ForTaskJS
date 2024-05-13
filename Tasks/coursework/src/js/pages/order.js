import {getMainTitle} from "/src/js/components/mainTitle/mainTitle.js"
import {getDesc} from "/src/js/components/desc/desc.js"

// Каталог
export function getOrderPage() {
    const page = document.createElement("div")
    page.classList.add("page", "catalog-page", "container")

    const mainTitle = getMainTitle("Заказ оформлен!")
    const desc = getDesc("Спасибо за заказ!")
    
 
   
    page.append(mainTitle, desc)
    return page
}



