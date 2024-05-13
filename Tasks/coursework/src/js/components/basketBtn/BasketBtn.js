import {router} from "/src/js/app.js"
import "./basketBtn.css"
import basketSvg from "bundle-text:/src/catalog/img/basket.svg"


// Создать кнопку корзиныЫ
export function getBasketBtn() {

const basketBtn = document.createElement ("a")

basketBtn.href="/basket"
basketBtn.classList.add("basket-btn")
basketBtn.innerHTML = basketSvg

basketBtn.addEventListener("click", function (event){
    event.preventDefault()
    router.navigate("/basket");
})

return basketBtn
}