document.querySelector(".chat-widget__side-text").onclick = () => {
    document.querySelector(".chat-widget").className = "chat-widget chat-widget_active"
}
const inputBlock = document.getElementById("chat-widget__input")
inputBlock.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            const date = new Date();
            let timer = String(date.getHours()) + ':' + String(date.getMinutes())
            console.log(timer)
            console.log(inputBlock.value)
        }
})
