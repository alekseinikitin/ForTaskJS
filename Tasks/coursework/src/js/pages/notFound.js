import {getMainTitle} from "/src/js/components/mainTitle/mainTitle.js"
import "../../css/style.css"


// Каталог
export function getNotFoundPage() {
    const page = document.createElement("div")
    page.classList.add("page", "notFound-page", "container")

    const mainTitle = getMainTitle("Страница не найдена")
    

    const img404 = document.createElement ("img")
    img404.classList.add("img404")
    img404.src = "https://s2.ziareromania.ro/?mmid=a576455c934e810d95"
   


   
    page.append(mainTitle, img404)
    return page
}