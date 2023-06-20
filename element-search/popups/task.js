const windowModal = document.getElementById('modal_main')
windowModal.className = "modal modal_active"

const windowClose = document.getElementsByClassName('modal__close')
const windowShow = document.getElementsByClassName('show-success')

for (let index = 0; index < windowClose.length; index++) {
    windowClose[index].onclick = () => {
        windowModal.className = "modal";
        document.getElementById('modal_success').className = "modal";
    }
}

for (let index = 0; index < windowShow.length; index++) {
    windowShow[index].onclick = () => {
        windowModal.className = "modal"
        document.getElementById('modal_success').className = "modal modal_active"
    }
}