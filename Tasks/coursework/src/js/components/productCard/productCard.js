import { router } from "/src/js/app"
import "./productCard.css"

// Карточка товара
export function getProductCard(id, title,  pic, price) {
       
    const item = document.createElement("li")
    item.classList.add("product-list__item")

    const productTitleId = document.createElement ("h3")
    productTitleId.classList.add("product-list__id")
    productTitleId.textContent= `артикул: ${id}`
    
    const productTitle = document.createElement ("h2")
    productTitle.classList.add("product-list__title")
   
    
    let productImg = document.createElement("img");
    productImg.classList.add("product-list__img") 
    productImg.src = pic 
           
    
    let productLink = document.createElement ("a")
    productLink.textContent= title
    productLink.href = "/product"

    productLink.addEventListener ("click", function (event){
        event.preventDefault ()
        router.navigate (`/product/${title}`);
    })

    productTitle.append (productLink)

    const productPrice = document.createElement ("strong")
    productPrice.classList.add("product-list__price")
    productPrice.textContent= `${price} руб`

    

    item.append(productTitle, productImg, productPrice, productTitleId)

    return item 
}
