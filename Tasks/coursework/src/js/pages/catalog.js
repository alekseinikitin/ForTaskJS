import {getMainTitle} from "/src/js/components/mainTitle/mainTitle.js"
import {getProductCard} from "/src/js/components/productCard/productCard.js"
import {tovar, tovar1, tovar2} from "/src/js/pages/data.js"

// Каталог
export function getCatalogPage() {

const page = document.createElement("div")
page.classList.add("page", "main-page", "container")

const mainTitle = getMainTitle("Каталог")

const list = document.createElement("ul")
list.classList.add("product-list", "list-reset")


list.append( getProductCard(...tovar), getProductCard(...tovar1),getProductCard(...tovar2))


page.append(mainTitle, list)
return page
}

