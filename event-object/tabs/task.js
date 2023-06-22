const tabs = Array.from(document.getElementsByClassName('tab'))
const contents = Array.from(document.getElementsByClassName('tab__content'))

function getActive(element) {
    return element.className == "tab tab_active"
}

for (let index = 0; index < tabs.length; index++) {
    tabs[index].onclick = () => {
        if (tabs[index].className != 'tab tab_active') {
                let activeIndex = tabs.findIndex(getActive)
                tabs[activeIndex].className = "tab"
                contents[activeIndex].className = "tab__content"
            }
            tabs[index].className = 'tab tab_active'
            contents[index].className = "tab__content tab__content_active"
    };
    
}
