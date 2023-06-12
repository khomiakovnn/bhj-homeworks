const img = document.getElementById("cookie")
const counter = document.getElementById("clicker__counter")
img.onclick = () => {
    counter.textContent = Number(counter.textContent) + 1
    if (counter.textContent % 2 == 0) {
        img.height /= 1.3;
        img.width /= 1.3; 
    } else {
        img.height *= 1.3;
        img.width *= 1.3; 
    }
}