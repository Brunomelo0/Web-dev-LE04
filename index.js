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