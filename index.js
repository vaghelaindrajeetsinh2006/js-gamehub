const btns = document.querySelectorAll('.btn');

 const sound = new Audio("click-mouse.mp3")

 btns.forEach((btn) => {
    btn.addEventListener('click',function () {
        sound.currentTime = 0;
        sound.play();
    })

 });


 