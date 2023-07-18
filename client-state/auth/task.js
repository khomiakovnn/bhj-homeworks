const form = document.getElementById('signin__form')
const welcomeDiv = document.getElementById('welcome')
const userIdDiv = document.getElementById('user_id')
let textContent = localStorage.user_id

if (textContent) {
    welcomeDiv.className = "welcome welcome_active"
    userIdDiv.textContent = textContent
    form.className = "signin"
}

form.reset()
form.onsubmit = (event) => {
    event.preventDefault()
    
    const xhr = new XMLHttpRequest()
    xhr.onload = () => {
        if (xhr.response.success) {
            welcomeDiv.className = "welcome welcome_active"
            userIdDiv.textContent = xhr.response.user_id
            form.className = "signin"
            textContent = xhr.response.user_id
        } else {alert('Неверный логин/пароль')}
    };

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    const formdata = new FormData(document.getElementById('signin__form'))
    xhr.responseType = "json"
    xhr.send(formdata)
}