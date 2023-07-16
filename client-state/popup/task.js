if (getCookie('advert') != 'true') {
    document.getElementById('subscribe-modal').className = 'modal modal_active'
    document.querySelector('.modal__close_times').onclick = () => {
        document.getElementById('subscribe-modal').className = 'modal'
        setCookie('advert', 'true')
    }
}

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}

function getCookie(name) {
    const pairs = document.cookie.split('; ')
    const cookie = pairs.find(p => p.startsWith(name + '='))
    if (cookie) {return cookie.substring(name.length+1)}
    return cookie
}
