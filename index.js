const textarea = document.getElementById('enviotzeet')
const contador = document.getElementById('contador')
const sendbutton = document.getElementById('sendbutton')
function cont(event) {
    if (event.keyCode >= 48 && event.keyCode <= 90) {
        contador.innerHTML = textarea.value.length + 1
    } else if (event.keyCode == 8) {
        if (textarea.value.length < 1)
            contador.innerHTML = 0
        if (contador.innerHTML > 0)
            contador.innerHTML -= 1
    }
    if (contador.innerHTML > 144) {
        contador.style.color = "rgb(255, 0, 0)"
    } else if (contador.innerHTML >= 104 && contador.innerHTML <= 144) {
        contador.style.color = "rgb(255, 200, 0)"
    } else {
        contador.style.color = "black"
    }
}
function habilitar() {
    if (parseInt(contador.innerHTML) > 0) {
        sendbutton.disabled = false
    } else {
        sendbutton.disabled = true
    }
}
const textareamodal = document.getElementById('enviotzeetmodal')
const contadormodal = document.getElementById('contadormodal')
const sendbuttonmodal = document.getElementById('sendbuttonmodal')
function contmodal(event) {
    if (event.keyCode >= 48 && event.keyCode <= 90) {
        contadormodal.innerHTML = textareamodal.value.length + 1
    } else if (event.keyCode == 8) {
        if (textareamodal.value.length < 1)
            contadormodal.innerHTML = 0
        if (contadormodal.innerHTML > 0)
            contadormodal.innerHTML -= 1
    }
    if (contadormodal.innerHTML > 144) {
        contadormodal.style.color = "rgb(255, 0, 0)"
    } else if (contadormodal.innerHTML >= 104 && contadormodal.innerHTML <= 144) {
        contadormodal.style.color = "rgb(255, 200, 0)"
    } else {
        contadormodal.style.color = "black"
    }
}
function habilitarmodal() {
    if (parseInt(contadormodal.innerHTML) > 0) {
        sendbuttonmodal.disabled = false
    } else {
        sendbuttonmodal.disabled = true
    }
}