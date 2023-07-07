const tips = Array.from(document.querySelectorAll(".has-tooltip"))

tips.forEach(element => {
    let divTip = document.createElement('div')
    divTip.className = "tooltip"
    divTip.textContent = element.title
    element.parentElement.insertBefore(divTip, element.nextElementSibling)
    divTip.style = `left: ${Math.round(element.getBoundingClientRect().left)}px; top: ${Math.round(element.getBoundingClientRect().bottom)}px`
});

tips.forEach(element => {
    element.onclick = () => {
        if (element.nextElementSibling.className == 'tooltip') {
            tips.forEach(elem => {elem.nextElementSibling.className = 'tooltip'})
            element.nextElementSibling.className = 'tooltip tooltip_active'
        } else {element.nextElementSibling.className = 'tooltip'}
        return false
    }
});
