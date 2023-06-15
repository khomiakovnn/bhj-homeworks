const prevButton = document.querySelector(".slider__arrow_prev")
const nextButton = document.querySelector(".slider__arrow_next")

nextButton.onclick = () => {
    let imageItem = document.querySelector(".slider__item_active");
    let nextImage = imageItem.nextElementSibling;
    if (imageItem.nextElementSibling == null) {
        nextImage = document.querySelector(".slider__item")
    }  
    imageItem.className = "slider__item";
    nextImage.className = "slider__item slider__item_active";    
}

prevButton.onclick = () => {
    let imageItem = document.querySelector(".slider__item_active");
    let nextImage = imageItem.previousElementSibling;
    if (imageItem.previousElementSibling == null) {
        nextImage = document.querySelector(".slider__items").lastElementChild
    }  
    imageItem.className = "slider__item";
    nextImage.className = "slider__item slider__item_active";    
}