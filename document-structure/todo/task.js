const inputText = document.getElementById("task__input")
const addButton = document.getElementById("tasks__add")
const divTasks = document.getElementById("tasks__list")

addButton.onclick = () => {
    let text = inputText.value.trim()
    if (text != "") {
        let divText = document.createElement('div')
        divText.className = "task__title"
        divText.textContent = inputText.value
        
        let delTask = document.createElement('a')
        delTask.href = "#"
        delTask.className = "task__remove"
        delTask.innerHTML = "&times;"
        delTask.onclick = () => {
            delTask.parentElement.remove()
            return false
        }
        
        let divTask = document.createElement('div')
        divTask.className = "task"
        divTask.insertAdjacentElement("beforeend",divText)
        divTask.insertAdjacentElement("beforeend", delTask)

        divTasks.insertAdjacentElement("beforeend",divTask)

        inputText.value = ""
    }
    return false
}
