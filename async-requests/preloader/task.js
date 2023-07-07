function makeDiv(code, value, currency) {
    
    let itemDiv = document.createElement('div')
    itemDiv.className = 'item'
    
    let codeDiv = document.createElement('div')
    codeDiv.className = 'item__code'
    codeDiv.textContent = code
    itemDiv.appendChild(codeDiv)

    let valueDiv = document.createElement('div')
    valueDiv.className = 'item__value'
    valueDiv.textContent = value
    itemDiv.appendChild(valueDiv)

    let curDiv = document.createElement('div')
    curDiv.className = 'item__currency'
    curDiv.textContent = currency
    itemDiv.appendChild(curDiv)

    document.getElementById('items').appendChild(itemDiv)
}

const xhr = new XMLHttpRequest
xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE) {
        document.getElementById('loader').className = "loader"
        items.textContent = ''

        for (const key in xhr.response.response["Valute"]) {
            let charcode = xhr.response.response["Valute"][key]['CharCode']
            let value = xhr.response.response["Valute"][key]['Value']
            makeDiv(charcode, value, 'руб.')
        }       
    }
}

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.responseType = 'json'
xhr.send()

