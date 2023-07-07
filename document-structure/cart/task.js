const pluses = Array.from(document.getElementsByClassName("product__quantity-control_inc"))
const minuses = Array.from(document.getElementsByClassName("product__quantity-control_dec"))
const addButtons = Array.from(document.getElementsByClassName("product__add"))
const cart = document.querySelector('.cart__products')
const cartProducts = document.getElementsByClassName('cart__product')

pluses.forEach(element => {
    element.onclick = () => {
        element.previousElementSibling.textContent = Number(element.previousElementSibling.textContent) + 1
    }
});

minuses.forEach(element => {
    element.onclick = () => {
        if (element.nextElementSibling.textContent > 1) {
          element.nextElementSibling.textContent = Number(element.nextElementSibling.textContent) - 1  
        }        
    }
});

addButtons.forEach(element => {
    element.onclick = () => {
        let idProd = element.closest('div.product').attributes[1].value
        let srcProd = element.closest('div.product__controls').previousElementSibling.src
        let countProd = Number(element.previousElementSibling.firstElementChild.nextElementSibling.textContent)
        
        const imgProd = document.createElement('img')
        imgProd.className = "cart__product-image"
        imgProd.src = srcProd

        const divCount = document.createElement('div')
        divCount.className = "cart__product-count"
        divCount.textContent = countProd

        const divProd = document.createElement('div')
        divProd.className = "cart__product"
        divProd.setAttribute('data-id', idProd)
        divProd.insertAdjacentElement("beforeend", imgProd)
        divProd.insertAdjacentElement("beforeend", divCount)

        // let checkProduct = false
        // Array.from(cartProducts).forEach(element => {
        //     if (element.attributes[1].value == idProd) {
        //         element.firstElementChild.nextElementSibling.textContent = Number(element.firstElementChild.nextElementSibling.textContent) + countProd
        //         checkProduct = true
        //     }
        // });

        // if (!checkProduct) {
        //     cart.insertAdjacentElement("beforeend", divProd)
        // }
        const productInCard = Array.from(cartProducts).find(elem => elem.attributes[1].value == idProd)
        if (productInCard) {
            productInCard.firstChild.nextElementSibling.textContent = Number(productInCard.textContent) + countProd
        } else {
            cart.insertAdjacentElement("beforeend", divProd)
            
        }
    }
});

