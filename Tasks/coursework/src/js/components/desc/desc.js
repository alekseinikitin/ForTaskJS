import "./desc.css"

// Создаем описание
export function getDesc (text) {
    const desc = document.createElement ("p")
    desc.classList.add("desc", "desc-footer")
    desc.textContent = text
    return desc
}
