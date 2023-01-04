const digitButton = document.querySelectorAll('#digit');
const displayArea = document.getElementById('displayarea');
const clearBtn = document.getElementById('clear-btn');
const equalBtn = document.getElementById('equal-btn');
const delBtn = document.getElementById('del-btn');
const operatorBtn = document.querySelectorAll('#digit-opr');

// functions for calculating based on user input
function add (a, b) {
  return a + b;
}
function subtract (a, b) {
  return a - b;
}
function multiply (a, b) {
  return a * b;
}
function divide (a, b) {
  if (b === 0) {
    displayArea.value = "Can't divde by zero!"
  } else return a / b;
}
// send user entered data to appropriate function
// for calculation and return result
function operate (operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

// event listener for displaying user input
digitButton.forEach(item => {
  item.addEventListener('click', () => {
    displayArea.value += item.value;
  })
})

operatorBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    let operator = item.value;
    displayArea.value += operator;
    calculate(displayArea.value);
  })

})
// event listener for clearing all data on display
clearBtn.addEventListener('click', () => {
  displayArea.value = '';
})
// for performing calculation when equal is pressed
equalBtn.addEventListener('click', () => {
  displayArea.value = calculate(displayArea.value)
})
// delete last element for view
delBtn.addEventListener('click', () => {
  displayArea.value = displayArea.value.slice(0, -1);
})

// convert string to numbers and operator and send for calculation
function calculate (someString) {
  let newArray = someString.split(' ');
    if (newArray.length === 3 ) {
      if(newArray[2] === '') {
        newArray.pop();
        return;
      }
      let num1 = Number(newArray[0])
      let num2 = Number(newArray[2])
      let operator = newArray[1];
      let result = operate(operator, num1, num2);
      displayArea.value = result.toString();
      newArray = [];
      newArray[0] = result;
      return;
     } else if(newArray.length > 3) {
        console.log(newArray);
      let num1 = Number(newArray[0])
      let num2 = Number(newArray[2])
      let operator = newArray[1];
      let operator2 = newArray[3]
      let result = operate(operator, num1, num2);
      operator = operator2;
      newArray = [];
      newArray[0] = result;
      newArray[1] = operator2;
      displayArea.value = `${result} ${operator} `
      return;
      }
  
}