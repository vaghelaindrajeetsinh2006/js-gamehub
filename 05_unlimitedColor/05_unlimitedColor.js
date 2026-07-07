const randmColor = function () {
    let hex ='0123456789ABCDEF'
    color = '#'
    for(let i = 0; i < 6;i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

// sound effect 

const sound = new Audio('click-mouse.mp3')

let Interval;
const starting = function () {
    sound.play()
    if(!Interval) {
        Interval = setInterval(changColor,1000)

    }
    function changColor() {
       document.body.style.background = randmColor()
    }
}

const stopped = function () {
    clearInterval(Interval)
    Interval = null
    console.log('stopped')
    sound.play()
}

document.querySelector('#start')
.addEventListener('click',starting)

document.querySelector('#stop')
.addEventListener('click',stopped)
