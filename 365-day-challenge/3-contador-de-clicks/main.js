let btn =  document.getElementById('btn')
let reset = document.getElementById('reset')
let number = document.getElementById('number')

let click = 0


function iniciarContador (){
    click++
    number.textContent = click
}

btn.addEventListener('click', iniciarContador)

reset.addEventListener('click', () =>{
    click = 0
    number.textContent = click
})