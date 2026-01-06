let btn = document.getElementById('btn')
let contador = document.getElementById('number')
let reset = document.getElementById('reset')

let clicks = localStorage.getItem('clicks')

if (clicks === null) {
    clicks = 0
} else {
    clicks = parseInt(clicks)
}

contador.textContent = clicks

function iniciarContador () {
    clicks++
    contador.textContent = clicks
    localStorage.setItem('clicks', clicks)
}

function reiniciarContador (){
    clicks = 0
    contador.textContent = clicks
}

btn.addEventListener('click', iniciarContador)
reset.addEventListener('click', reiniciarContador)