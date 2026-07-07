const btns = document.querySelectorAll('.btn');

 const sound = new Audio("../assets/sound/click-mouse.mp3")

 btns.forEach((btn) => {
    btn.addEventListener('click',function () {
        sound.currentTime = 0;
        sound.play();
    })

 });


 