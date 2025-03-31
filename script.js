const display = document.getElementById('display');
let resetDisplay = false; 

function appendToDisplay(value) {
    if (resetDisplay) {
        display.value = ''; 
        resetDisplay = false; 
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '';
    resetDisplay = false; 
}
//git check
function calculateResult() {
    try {
        display.value = eval(display.value);
        resetDisplay = true; 
    } catch (error) {
        display.value = 'Error';
        resetDisplay = true; 
    }
}
function backspace() {
    display.value = display.value.slice(0, -1);
}