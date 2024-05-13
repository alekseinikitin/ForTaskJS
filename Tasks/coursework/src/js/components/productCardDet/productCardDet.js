import { router } from "/src/js/app"
import "./productCardDet.css"

// Карточка товара
export function getProductCardDet(desc, title,  pic, price) {
       
    const item = document.createElement("li")
    item.classList.add("product-list__item")

    const productTitleId = document.createElement ("h3")
    productTitleId.classList.add("product-list__descDet")
    productTitleId.textContent= desc
    
    const productTitle = document.createElement ("h2")
    productTitle.classList.add("product-list__titleDet")
   
    
    let productImg = document.createElement("img");
    productImg.classList.add("product-list__imgDet") 
    productImg.src = pic 
           
       
    const productPrice = document.createElement ("strong")
    productPrice.classList.add("product-list__priceDet")
    productPrice.textContent= `${price} руб`

    const addBasket = document.createElement ("button")
    addBasket.classList.add("btn")
    addBasket.textContent= "В корзину"

    item.append(productTitle, productImg, productTitleId, productPrice, addBasket )

    return item 
}
