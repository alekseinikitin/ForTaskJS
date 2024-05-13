import "./logo.css"
import logoImg from "/src/catalog/img/logo.svg"

// Создать логотип
export function getLogo () {

const logo = document.createElement ("img")
logo.classList.add("logo")
logo.src = logoImg
return logo
}