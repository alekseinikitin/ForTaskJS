import {getMainTitle} from "/src/js/components/mainTitle/mainTitle.js"
import {getDesc} from "/src/js/components/desc/desc.js"
import {getProductCard} from "/src/js/components/productCard/productCard.js"
import {tovars} from "/src/js/pages/data.js"


// Страница товара
export function getProductPage(title) {
    const page = document.createElement("div")
    page.classList.add("page", "product-page", "container")

    const mainTitle = getMainTitle(title)
    const desc = getDesc("Подробная информация")
    


let tovar = tovars.find(tovar => tovar.title === title);
console.log(title)
console.log(tovar.title)

if (title === tovar.title) 
{console.log(tovar)}

let tovarCard = Object.values(tovar)

const product = getProductCard(...tovarCard) 
    
    
   
    page.append(mainTitle, desc, product)
    return page
}

