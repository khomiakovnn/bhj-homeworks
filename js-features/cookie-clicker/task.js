const img = document.getElementById("cookie")
const counter = document.getElementById("clicker__counter")
img.onclick = () => {
    img.width = ++counter.textContent % 2 ? 250 : 200;
}