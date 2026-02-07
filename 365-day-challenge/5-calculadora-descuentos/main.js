const originalPrice = document.getElementById('originalPrice')
const discountPercentage = document.getElementById('discountPercentage')

const btn = document.getElementById('btn')
const remove = document.getElementById('remove')

const save = document.getElementById('save')
const price = document.getElementById ('price')

btn.addEventListener('click', calculateDiscount)
remove.addEventListener('click', deleteSelection)

function calculateDiscount(){
    let discount = Number(originalPrice.value) * Number(discountPercentage.value) / 100
    let finalPrice = Number(originalPrice.value) - discount

    save.innerHTML = discount.toFixed(3)
    price.innerHTML = finalPrice.toFixed(3)
}

function deleteSelection(){
    location.reload()
}