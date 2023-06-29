const rotators = Array.from(document.getElementsByClassName("rotator__case"))
function findeIndex(param) {
    console.log(param.className)
    return param.className == "rotator__case rotator__case_active"
}

setInterval(() => {
    let activeIndex = rotators.findIndex(findeIndex)
    rotators[activeIndex].className = "rotator__case"
    if (activeIndex < rotators.length-1) {activeIndex++}
    else {activeIndex = 0}
    rotators[activeIndex].className = "rotator__case rotator__case_active"
}, 1000);

// do {
//     let activeIndex = rotators.findIndex(findeIndex)
//     rotators[activeIndex].className = "rotator__case"
//     if (activeIndex < rotators.length-1) {activeIndex++}
//     else {activeIndex = 0}
//     rotators[activeIndex].className = "rotator__case rotator__case_active"
//     setTimeout(1000)
// } while (true);