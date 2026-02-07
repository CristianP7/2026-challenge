const originalPrice = document.getElementById('originalPrice')
const discountPercentage = document.getElementById('discountPercentage')

const btn = document.getElementById('btn')
const remove = document.getElementById('remove')

const save = document.getElementById('save')
const price = document.getElementById ('price')

btn.addEventListener('click', calculateDiscount)
remove.addEventListener('click', deleteSelection)

function calculateDiscount(){
    let discount = (originalPrice.value) * (discountPercentage.value) / 100
    let finalPrice = (originalPrice.value) - discount

    save.innerHTML = discount
    price.innerHTML = finalPrice
}

function deleteSelection(){
    location.reload()
}