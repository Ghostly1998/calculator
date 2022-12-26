const digitButton = document.querySelectorAll('#digit');
const addBtn = document.getElementById('add-btn');
const subBtn = document.getElementById('subtract-btn');
const mulBtn = document.getElementById('multiply-btn');
const divBtn = document.getElementById('divide-btn');
const clrBtn = document.getElementById('clear-btn');
const equalBtn = document.getElementById('equal-btn');
const displayArea = document.getElementById('displayarea');



function add(...num){
    // console.log(num);
    let finalValue = null;
    num.forEach(item => {
        // console.log(item);
        finalValue += item;
    });
    console.log(addition)
    return addition; 
}

// add(1,2,4,3);

function subtract(...num){
    let finalValue = null;
    num.forEach(item => {
        finalValue = -finalValue - item;
    });
    console.log(finalValue);
    return finalValue;
}
// subtract(7,13)


function multiply(...num){
    let finalValue = 1;
    num.forEach(item => {
        finalValue *= item;
    });
    console.log(finalValue);
    return finalValue;
}
// multiply(6,5)

function divide(...num){
    let finalValue = 1;
    finalValue = num[0]/num[1];
    
    console.log(finalValue);
    return finalValue;
}

// divide(8,2)

function operate(operater, ...num) {
    switch(operate){
        case '+' :
            add(...num);
            break;
        
        case '-' :
            subtract(...num);
            break;
        case '*' :
            multiply(...num);
            break;
        case '/' :
            divide(...num);
            break;

    }
}