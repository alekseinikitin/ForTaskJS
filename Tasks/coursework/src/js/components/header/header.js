import {router} from "/src/js/app.js"
import "./header.css"
import {getNavigationLink} from "/src/js/components/navigationLink/navigationLink.js"
import {getLogo} from "/src/js/components/logo/logo.js"
import {getBasketBtn} from "/src/js/components/basketBtn/basketBtn.js"



// Создать шапку 
export function getHeader () {
    const header = document.createElement ("header")
    header.classList.add("header")

    const container = document.createElement("div")
    container.classList.add("container", "header__container")

    const basketBtn = getBasketBtn ()
    basketBtn.classList.add("basket-btn")
    
    const logo = getLogo ()
    logo.classList.add("header__logo")

    const nav = document.createElement("nav")
    nav.classList.add("header__navigation")
    
    let link1 = getNavigationLink ("/", "Главная страница")
    let link2 = getNavigationLink ("/catalog", "Каталог")
    
    
    // let link3 = getNavigationLink ("/basket", "Корзина")
   


    nav.append(link1, link2)
    container.append(logo, nav, basketBtn)

    header.append(container)

    return header 
}



    // let link4 = document.createElement("a")
    // link4.href = 
    // link4.classList.add("btn")
    // link4.textContent = "Продукт"

    // link4.addEventListener("click", function (event){
    //     event.preventDefault()

    //     navigation("product")
    // })