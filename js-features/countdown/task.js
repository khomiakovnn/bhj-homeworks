const timer = document.getElementById('timer')
let counter = Number(timer.textContent)
function timerFunction() {
    timer.textContent = counter
    counter --
}
const intervalID = setInterval(timerFunction, 1000)
setTimeout(() => {clearInterval(intervalID); alert('Вы победили в конкурсе'); }, 61000);
