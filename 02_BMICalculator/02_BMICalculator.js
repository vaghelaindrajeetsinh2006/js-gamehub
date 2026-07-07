const forms = document.querySelector('form') 

forms.addEventListener('submit',function(e) {
    e.preventDefault();
    
    const height =parseFloat(document.querySelector('#height').value)
    const weight =parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')

    // sound effect

    const sound = new Audio("../assets/sound/click-error.mp3")
  

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
        sound.play();
    }
     else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid height ${weight}`;
        sound.play();
     }
    else {
       const finalResult =(weight / ((height * height)/10000)).toFixed(2)
       result.innerHTML = `<span>${finalResult}</span>`
    }


} );

