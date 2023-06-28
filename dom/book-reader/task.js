const fonts = Array.from(document.querySelectorAll("a.font-size"))
const book = document.getElementById('book')

for (let index = 0; index < fonts.length; index++) {
    fonts[index].onclick = () => {
        document.querySelector(".font-size_active").classList.toggle('font-size_active')
        fonts[index].classList.toggle('font-size_active')
        switch (fonts[index].dataset.size) {
            case 'big':
                book.className = 'book book_fs-big'
                break;
            case 'small':
                book.className = 'book book_fs-small'
                break;
            case undefined:
                book.className = 'book'
                break;
        }      
        return false            
    }   
};