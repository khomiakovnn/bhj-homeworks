const menuItems = Array.from(document.querySelectorAll('.menu__link'))
for (let index = 0; index < menuItems.length; index++) {
    menuItems[index].onclick = () => {
        if (menuItems[index].nextElementSibling != null) {
            if (menuItems[index].nextElementSibling.className == "menu menu_sub") {
                const activeMenu = Array.from(document.getElementsByClassName('menu menu_sub menu_active'));
                if (activeMenu.length == 1) {
                    activeMenu[0].className = "menu menu_sub"
                }
                menuItems[index].nextElementSibling.className = "menu menu_sub menu_active"    
                } else {
                    if (menuItems[index].nextElementSibling.className == "menu menu_sub menu_active") {
                        menuItems[index].nextElementSibling.className = "menu menu_sub"
                    }
                }
        return false            
        }   
    }    
}