const prevButton = document.querySelector(".slider__arrow_prev")
const nextButton = document.querySelector(".slider__arrow_next")

// Решение не через массив

// nextButton.onclick = () => {
//     let imageItem = document.querySelector(".slider__item_active");
//     let nextImage = imageItem.nextElementSibling;
//     if (imageItem.nextElementSibling == null) {
//         nextImage = document.querySelector(".slider__item")
//     }  
//     imageItem.className = "slider__item";
//     nextImage.className = "slider__item slider__item_active";    
// }

// prevButton.onclick = () => {
//     let imageItem = document.querySelector(".slider__item_active");
//     let nextImage = imageItem.previousElementSibling;
//     if (imageItem.previousElementSibling == null) {
//         nextImage = document.querySelector(".slider__items").lastElementChild
//     }  
//     imageItem.className = "slider__item";
//     nextImage.className = "slider__item slider__item_active";    
// }


// Решение через массив
const sliderItems = Array.from(document.querySelectorAll(".slider__item"))
const sliderDots = Array.from(document.querySelectorAll(".slider__dot"))
sliderDots[0].className = "slider__dot slider__dot_active"
let activItemIndex = 0
let nextIndex = 0

function getActivIndex(array) {
    for (let index = 0; index < sliderItems.length; index++) {
        if (array[index].className == "slider__item slider__item_active") {return index}
    }
}

function change(active, next) {
    sliderItems[active].className = "slider__item"
    sliderItems[next].className = "slider__item slider__item_active"
    sliderDots[active].className = "slider__dot"
    sliderDots[next].className = "slider__dot slider__dot_active"
}

nextButton.onclick = () => {
    activItemIndex = getActivIndex(sliderItems)
    if (activItemIndex == sliderItems.length - 1) {
        nextIndex = 0
    } else {
        nextIndex = activItemIndex + 1
    }
    change(activItemIndex, nextIndex)
}

prevButton.onclick = () => {
    activItemIndex = getActivIndex(sliderItems)
    if (activItemIndex == 0) {
        nextIndex = sliderItems.length - 1
    } else {
        nextIndex = activItemIndex - 1
    }
    change(activItemIndex, nextIndex)
}


// Решение с точками
for (let index = 0; index < sliderDots.length; index++) {
    sliderDots[index].onclick = () => {
        activItemIndex = getActivIndex(sliderItems);
        nextIndex = index;
        change(activItemIndex, nextIndex)
    };
}