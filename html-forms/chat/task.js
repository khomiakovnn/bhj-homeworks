document.querySelector(".chat-widget__side-text").onclick = () => {
    document.querySelector(".chat-widget").className = "chat-widget chat-widget_active"
}
const inputBlock = document.getElementById("chat-widget__input")
inputBlock.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        const date = new Date();
        let timer = String(date.getHours()) + ':' + String(date.getMinutes())
        const messages = document.querySelector( '.chat-widget__messages' )
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${timer}</div>
            <div class="message__text">
            ${inputBlock.value}
            </div>
        </div>
        <div class="message">
            <div class="message__time">${timer}</div>
            <div class="message__text">
            Добрый день, мы ещё не проснулись. Позвоните через 10 лет
            </div>
        </div>
        `;
    }
})
