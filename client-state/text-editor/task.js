const textBlock = document.getElementById('editor')

textBlock.value = localStorage.text
textBlock.onkeydown = () => {
    localStorage.text = textBlock.value
}