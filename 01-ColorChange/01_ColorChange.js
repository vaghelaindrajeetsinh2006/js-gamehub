const buttons = document.querySelectorAll(".button")
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const click = document.querySelectorAll('.nav-links')

// sound effect 
const sound = new Audio("color-chang.mp3")
const clicks = new Audio("click-mouse.mp3")

click.forEach ( (el) => {
    el.addEventListener ( "click",function() {
        clicks.currentTime = 0;
        clicks.play();
    })
})

buttons.forEach (function (button) {
    // console.log(button)
    button.addEventListener('click',function(e) {
        sound.play();
        //  console.log(e)
        setTimeout ( () => {
         console.log(e.target.id)
         if(e.target.id == "grey") {
             body.style.background = e.target.id;
         } 
         else if(e.target.id == "white") {
             body.style.backgroundColor = e.target.id;
         } 
         else if(e.target.id == "blue") {
            
             body.style.backgroundColor = e.target.id;
         } 
         else if(e.target.id == "yellow") {
           
             body.style.backgroundColor = e.target.id;
         }

        },1000)
         
    })
})