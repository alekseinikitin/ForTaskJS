import "./footer.css"
import {getLogo} from "/src/js/components/logo/logo.js"
import {getDesc} from "/src/js/components/desc/desc.js"

// Создать футер
export function getFooter () {
    const footer = document.createElement ("footer")
    footer.classList.add("footer")

    const container = document.createElement("div")
    container.classList.add("container", "footer__container")

    const logo = getLogo ()
    logo.classList.add("header__logo")
    const desc = getDesc("Сайт создан в образовательных целях")
    container.append(logo, desc )

    footer.append(container)
    
    return footer
}

