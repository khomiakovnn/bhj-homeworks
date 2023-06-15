const timer = document.getElementById('timer')
let counter = Number(timer.textContent)
function timerFunction() {
    timer.textContent = counter
    counter --
    if (counter == 0) {
        clearInterval(intervalID);
        alert('Вы победили в конкурсе');
    }
}
const intervalID = setInterval(timerFunction, 1000);
