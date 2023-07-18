const textBlock = document.getElementById('editor')

textBlock.value = localStorage.getItem('text')
textBlock.onkeydown = () => {
    localStorage.text = textBlock.value
}