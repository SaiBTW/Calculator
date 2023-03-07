const buttonEl = document.querySelectorAll('.btn')
const clearEl = document.querySelector('.btn-clear')
const equalEl = document.querySelector('.btn-equal')
const screenEl = document.querySelector('.screen')
let calculate = ''
screenEl.value = `0`




// Event Function for all other buttons
buttonEl.forEach((button)=>{
    button.addEventListener('click',setScreen)
})


// Event Function for the '=' button
equalEl.addEventListener('click',evaluateThis)



// Clear Button Code
clearEl.addEventListener('click',()=>{
    calculate = ''
    screenEl.value=`0`
})


// Function to Set the Screen Values
function setScreen(e){
    let activeValue = e.target.dataset.num;
        
        calculate+=activeValue
        screenEl.value=calculate
}

// Function to Calculate the String
function evaluateThis(){
if(calculate === ''){
    screenEl.value = `No Value`
}
else{
    try {
        calculate = eval(calculate)
        screenEl.value=calculate
        
    } 
    catch (e) {
        if (e instanceof SyntaxError) {
           screenEl.value=`Syntax Err`
           calculate=`0` 
          } else {
            screenEl.value=`Unknow Err`
            calculate=`0`
          }
    }
}
}

// To handle Keyboard Entries
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '%'];
    if(calculate.length <= 2){screenEl.value=`0`;}
    
    if (validKeys.includes(key)) {
      calculate += key;
      screenEl.value = calculate;
    } else if (key === 'Enter') {
      evaluateThis();
    }
    // } else if (key === 'Backspace') {
        
    //     calculate = calculate.slice(0, -1);
    //     screenEl.value = calculate;
    // }
  });

