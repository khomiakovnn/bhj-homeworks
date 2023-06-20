const prevButton = document.querySelector(".slider__arrow_prev")
const nextButton = document.querySelector(".slider__arrow_next")

const sliderItems = Array.from(document.querySelectorAll(".slider__item"))
const sliderDots = Array.from(document.querySelectorAll(".slider__dot"))
sliderDots[0].className = "slider__dot slider__dot_active"

function getActiv(element) {
    return element.className == "slider__item slider__item_active"
}

function change(active, next) {
    sliderItems[active].className = "slider__item"
    sliderItems[next].className = "slider__item slider__item_active"
    sliderDots[active].className = "slider__dot"
    sliderDots[next].className = "slider__dot slider__dot_active"
}

nextButton.onclick = () => {
    let nextIndex
    let activItemIndex = sliderItems.findIndex(getActiv)
    if (activItemIndex == sliderItems.length - 1) {
        nextIndex = 0
    } else {
        nextIndex = activItemIndex + 1
    }
    change(activItemIndex, nextIndex)
}

prevButton.onclick = () => {
    let nextIndex
    let activItemIndex = sliderItems.findIndex(getActiv)
    if (activItemIndex == 0) {
        nextIndex = sliderItems.length - 1
    } else {
        nextIndex = activItemIndex - 1
    }
    change(activItemIndex, nextIndex)
}

for (let index = 0; index < sliderDots.length; index++) {
    sliderDots[index].onclick = () => {
        let activItemIndex = sliderItems.findIndex(getActiv)
        let nextIndex = index;
        change(activItemIndex, nextIndex)
    };
}

