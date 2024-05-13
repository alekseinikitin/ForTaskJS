import {getMainTitle} from "/src/js/components/mainTitle/mainTitle.js"
import {getDesc} from "/src/js/components/desc/desc.js"
import "../../css/style.css"
// Главная страница

export function getMainPage() {


    const page = document.createElement("div")
    page.classList.add("page", "catalog-page", "container")

    const mainTitle = getMainTitle("Главная страница")
    const desc = getDesc("Добро пожаловать в магазин Ukulele Shop! С 2024 года мы продаём Укулеле и всё о них знаем! В нашем ассортименте только проверенные интересные инструменты лучших производителей, которые специализируются на производстве укулеле. Каждая гавайская гитара, которую можно купить в нашем магазине, проходит предпродажную проверку и при необходимости - подготовку у мастера. На каждую Укулеле мы даём свою гарантию при условии правильного хранения инструмента. Также, Вы всегда можете вернуть инструмент в течении 30 дней с момента получения посылки если он Вам не подошёл.") 
    // const product = getProductList()
    // product.getProducts()

    const imgMain = document.createElement ("img")
    imgMain.classList.add("imgMain")
    imgMain.src = "https://cdn.dribbble.com/users/561223/screenshots/4348785/rollenspiel.gif"
    
   
    page.append(mainTitle, imgMain, desc )
    return page
}