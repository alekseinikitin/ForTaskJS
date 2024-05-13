import {getMainTitle} from "/src/js/components/mainTitle/mainTitle.js"
import {getDesc} from "/src/js/components/desc/desc.js"
import {getProductCardDet} from "/src/js/components/productCardDet/productCardDet.js"
import {tovars} from "/src/js/pages/data.js"


// Страница товара
export function getProductPage(title) {
    const page = document.createElement("div")
    page.classList.add("page", "product-page", "container")

     


let tovar = tovars.find(tovar => tovar.title === title);
console.log(title)
console.log(tovar.title)

if (title === tovar.title) 
{console.log(tovar)}
console.log(typeof tovar);

let tovarCard = Object.values(tovar)
console.log(tovarCard)
console.log(typeof tovarCard);



const product = getProductCardDet(...tovarCard) 
    
    
   
    page.append(product)
    return page
}

