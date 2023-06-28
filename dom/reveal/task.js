const blocks = Array.from(document.getElementsByClassName('reveal'))
document.onscroll = () => {
    for (let index = 0; index < blocks.length; index++) {
        if (blocks[index].getBoundingClientRect().bottom < window.innerHeight && blocks[index].getBoundingClientRect().top > 0) {
            blocks[index].className = "reveal reveal_active"
        } else {
            blocks[index].className = "reveal";
        }
    
    }
}