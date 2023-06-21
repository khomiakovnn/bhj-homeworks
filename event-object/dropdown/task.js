const dropButtons = document.getElementsByClassName("dropdown")
for (let index = 0; index < dropButtons.length; index++) {
    dropButtons[index].onclick = () => {
        const itemList = dropButtons[index].firstElementChild.nextElementSibling
        if (itemList.className == "dropdown__list") { 
            itemList.className = "dropdown__list dropdown__list_active"
        } else {
            itemList.className = "dropdown__list";
        }
    };
}

const dropItems = document.getElementsByClassName("dropdown__link")
for (let index = 0; index < dropItems.length; index++) {  
    dropItems[index].onclick = () => {
    dropItems[index].parentElement.parentElement.previousElementSibling.textContent = dropItems[index].textContent
    return false
    }    
}
