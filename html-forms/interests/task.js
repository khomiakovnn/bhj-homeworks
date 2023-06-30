const foodCheck = Array.from(document.querySelectorAll(".interests_active"))

for (let i = 0; i < foodCheck.length; i++) {
    const bigCheck = foodCheck[i].previousElementSibling.firstElementChild
    
    bigCheck.onclick = () => {
        let checkBoxes = Array.from(foodCheck[i].children)
        for (let y = 0; y < checkBoxes.length; y++) {
            checkBoxes[y].firstElementChild.firstElementChild.checked = bigCheck.checked      
        }    
    }  
}