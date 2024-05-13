import {router} from "/src/js/app.js"
import "./navigationLink.css"


export function getNavigationLink (path, title = "") {
    let link = document.createElement("a")
    link.href = path
    link.classList.add("navigation-link")
    link.textContent = title
    link.setAttribute('data-navigo', true)

    link.addEventListener("click", function (event){
        event.preventDefault()
        router.navigate(path);
    })
    return link
}