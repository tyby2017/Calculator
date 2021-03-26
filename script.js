const add = function(a,b){
    return a+b;
}

const subtract = function(a,b){
    return a-b;
}

const multiply = function(a,b) {
    return a*b;
}

const divide = function(a,b){    
    return a/b;
}

function operate(operator, a, b) {
    return operator(a,b);
}

const buttons = [...document.querySelectorAll('.button')];

buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.backgroundColor = '#3E4259';
    });    
});

buttons.forEach(button => {
    button.addEventListener('mouseup', () => {
        button.style.backgroundColor = '#BFA8BE';
    });    
});


let displayNo='';

const numbers = [...document.querySelectorAll('.number')];
numbers.forEach(number => {        
        number.addEventListener('click', function() {
        displayNo += number.innerHTML;
        document.getElementById('screen').textContent = displayNo;        
    });
});

let operation;
let secondNumber;
const operators =[...document.querySelectorAll('.operator')];
operators.forEach(operator => {
    operator.addEventListener('click', function(){
        if(secondNumber)
        {
            result();
        }        
        secondNumber=displayNo;
        displayNo = '';
        let op = operator.getAttribute('id');
        switch(op) {
            case 'add':
                operation = add;
                break;
            case 'subtract':
                operation = subtract;
                break;
            case 'multiply':
                operation = multiply;
                break;
            case 'divide':
                operation = divide;
                break;
        }
    });
});

const equal = document.getElementById('equal');
equal.addEventListener('click', result);

function result() {
    const result = Math.round((operate(operation,Number(secondNumber),Number(displayNo)))*100)/100;
    document.getElementById('screen').innerHTML = result;
    displayNo =result;
}

const clear = document.getElementById('clear');
clear.addEventListener('click', ()=>location.reload());

const backspace = document.getElementById('backspace');
backspace.addEventListener('click', () =>{
    displayNo = displayNo.substring(0,displayNo.length-1);
    document.getElementById('screen').innerHTML= displayNo
});