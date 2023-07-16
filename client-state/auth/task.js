if (localStorage.user_id) {
    document.getElementById('welcome').className = "welcome welcome_active"
    document.getElementById('user_id').textContent = localStorage.user_id
    document.getElementById('signin__form').className = "signin"
}

document.getElementById('signin__form').onsubmit = (event) => {
    event.preventDefault()
    
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.response.success) {
                document.getElementById('welcome').className = "welcome welcome_active"
                document.getElementById('user_id').textContent = xhr.response.user_id
                document.getElementById('signin__form').className = "signin"
                localStorage.user_id = xhr.response.user_id
                console.log(localStorage.user_id)
            } else {alert('Неверный логин/пароль')}
        }
    };

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    const formdata = new FormData(document.getElementById('signin__form'))
    xhr.responseType = "json"
    xhr.send(formdata)
}