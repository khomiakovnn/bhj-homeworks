const menuItems = Array.from(document.querySelectorAll('.menu__link'))
for (let index = 0; index < menuItems.length; index++) {
    menuItems[index].onclick = () => {
        if (menuItems[index].nextElementSibling.className == "menu menu_sub") {
            menuItems[index].nextElementSibling.className = "menu menu_sub menu_active"
        }
        return false
    };
    
}