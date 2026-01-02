let video = document.getElementById('video')
let button = document.getElementById('button')

function reproducirSonido (){
    if (video.muted) {
        video.muted = false
        button.textContent = 'Mute'
    } else {
        video.muted = true
        button.textContent = 'Unmute'
    }
}

button.addEventListener('click', reproducirSonido)