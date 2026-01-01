let cocacola = document.getElementById('cocacola')
let pepsi = document.getElementById('pepsi')
let sprite = document.getElementById('sprite')
let borrar = document.getElementById('borrar')
let producto = document.getElementById('producto')


function seleccionarCocacola (){
    producto.innerHTML = 'Coca-Cola'
}

function seleccionarPepsi (){
    producto.innerHTML = 'Pepsi'
} 

function seleccionarSprite (){
    producto.innerHTML = 'Sprite'
}

function borrarSeleccion (){
    producto.innerHTML = ''
}



cocacola.addEventListener('click',seleccionarCocacola)
pepsi.addEventListener('click', seleccionarPepsi)
sprite.addEventListener('click', seleccionarSprite)
borrar.addEventListener('click', borrarSeleccion)