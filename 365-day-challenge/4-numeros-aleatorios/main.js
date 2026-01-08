let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let send = document.getElementById('send')
let start = document.getElementById('start')
let reset = document.getElementById('reset')
let numeroAleatorio = document.getElementById('numeroAleatorio')

let max = 3
let min = 1
let numeroEnemigo = Math.floor(Math.random()*(max-min+1)+1);


function iniciarJuego1 (){
    one = 1
    numeroJugador.textContent = one 

    jugador2()

    if (one == numeroEnemigo){
        resultado.textContent = 'EMPATE'
    } else {
        resultado.textContent = 'PERDISTE'
    }
}

function iniciarJuego2 (){
    two = 2
    numeroJugador.textContent = two

    jugador2 ()

    if (two == numeroEnemigo){
     resultado.textContent = 'EMPATE'
    } else if (two > numeroEnemigo ){
        resultado.textContent = 'GANASTE'
    } else {
        resultado.textContent = 'PERDISTE'
    }
}

function iniciarJuego3 (){
    three = 3
    numeroJugador.textContent = three

    jugador2 ()

    if (three == numeroEnemigo){
     resultado.textContent = 'EMPATE'
    } else if (three > numeroEnemigo ){
        resultado.textContent = 'GANASTE'
    } else {
        resultado.textContent = 'PERDISTE'
    }
}

function jugador2 (){
    numeroAleatorio.textContent = numeroEnemigo
}

function reiniciarJuego (){
    window.location.reload();
}

one.addEventListener('click', iniciarJuego1)
two.addEventListener('click', iniciarJuego2)
three.addEventListener('click', iniciarJuego3)
reset.addEventListener('click', reiniciarJuego)
