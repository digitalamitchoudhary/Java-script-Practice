let currentDisplay = ''
  
let buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log("Button clicked");
        if(e.target.innerHTML == '='){
            currentDisplay = eval(currentDisplay);
            document.querySelector('#input-box').value = currentDisplay;
          }
          else if(e.target.innerHTML == 'c'){
            currentDisplay = ""
            document.querySelector('#input-box').value = currentDisplay;
          }
          else{ 
        //   console.log(e.target)
          currentDisplay = currentDisplay + e.target.innerHTML;
          document.querySelector('#input-box').value = currentDisplay;
            }
    });
});




