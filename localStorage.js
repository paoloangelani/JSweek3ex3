const textAreaReference = document.getElementById('text')
const saveButtonReference = document.getElementById('save-button')
const loadButtonReference = document.getElementById('load-button')
const resetButtonReference = document.getElementById('reset-button')


const reset = function () {
    textAreaReference.value = ''
    console.log('textarea svuotata')
}

const save = function () {

    let content = textAreaReference.value
    localStorage.setItem('savedText', content)
    console.log('contenuto salvato!')
}

const load = function () {
    let savedContent = localStorage.getItem('savedText')
    textAreaReference.value = savedContent
    console.log('contenuto caricato correttamente')
}

saveButtonReference.onclick = save
loadButtonReference.onclick = load
resetButtonReference.onclick = reset

window.onload = function () {
    load()
}
