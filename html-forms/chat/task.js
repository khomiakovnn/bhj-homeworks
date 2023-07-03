document.querySelector(".chat-widget__side-text").onclick = () => {
    document.querySelector(".chat-widget").className = "chat-widget chat-widget_active"
}
const replies = [
    "Добрый день, мы ещё не проснулись. Позвоните через 10 лет",
    "Привет, мы не на связи",
    "Здравствуйте, у нас выходной",
]
const inputBlock = document.getElementById("chat-widget__input")
inputBlock.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        let textInput = inputBlock.value.trim()
        if (textInput != "") {
            console.log(textInput)
            let timer = new Date().toTimeString().slice(0,5)
            const messages = document.querySelector( '.chat-widget__messages' )
            messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${timer}</div>
                <div class="message__text">
                ${textInput}
                </div>
            </div>
            <div class="message">
                <div class="message__time">${timer}</div>
                <div class="message__text">
                ${replies[Math.floor(Math.random() * replies.length)]}
                </div>
            </div>
            `;
        }
        inputBlock.value = ""
    }
})
