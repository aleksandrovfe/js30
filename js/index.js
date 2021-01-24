const playClass = 'play'

function removeTransition (e) {
    if (e.propertyName !== 'transform') return
    this.classList.remove(playClass)
}

function playSound (e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (audio) {
        audio.currentTime = 0;
        audio.play()
        key.classList.add(playClass)
    }
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', (e) => {
    playSound(e)
})