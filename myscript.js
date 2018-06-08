/* JavaScript Mock iOS Calculator
   Author: Ishwarya
   Version: 1.0.1 */
/*eslint-env browser*/

var buttons = document.body.querySelectorAll('.buttons > input');
var output = document.getElementById('display');

//Assigned Variable
var operator = ['x', '%', '+/-', '÷', '-', '+'];
var input = '';
var operatorFlag = false;
var dotFlag = false;
var equation = '';
var result = '';
var ans;
var i;

for (i = 0; i < buttons.length; i++) {
buttons[i].onclick = function(e){
var btnText = this.value; 
//Assigning values to each button
    if(btnText === 'AC'){
        input = '';
        equation = '';
        result = '';
        operatorFlag = false;
    }
else if(btnText === "ಾ") { // input of the mystery button    
        var x = Number(input);
        input = ((x + 4)/10)*3;
        result = Math.round(eval(input)*10000)/10000;
        input = result;   
  }
else if(btnText === 'Click Me!'){
      let ans = prompt("What do you think is happening when you click the ೌ button?")
      if (ans == '((x+4)*3)/10'){
        alert('Good Job!')
    }
      else {
          alert('Sorry, try again')
          prompt('What do you think is happening when you click the ೌ button?')
      }
}
else if (btnText === '%'){
        input = input/100;
}
else if (btnText === '÷'){
        input += '÷';
}
else if (btnText === 'x') {
        input += 'x';
}
else if (btnText === '-'){
        input += '-';
}
else if (btnText === '+'){
        input += '+';
}
else if (btnText === '7'){
        input += '7';
}
else if (btnText === '8'){
        input += '8';
}
else if (btnText === '9'){
        input += '9';
}
else if (btnText === '4'){
        input += '4';
}
else if (btnText === '5'){
        input += '5';
}
else if (btnText === '6'){
        input += '6';
}
else if (btnText === '1'){
        input += '1';
}
else if (btnText === '2'){
        input += '2';
}
else if (btnText === '3'){
        input += '3';
}
else if (btnText === '0'){
        input += '0';
}
else if (btnText === '.'){
    if(input.indexOf('.')){
        input += '.';
    }
}
else if (btnText === '='){
       if(operator.indexOf(input[input.length - 1])> -1) {
        input = input.slice(0, input.length - 1)
      }
      equation = input.replace(/x/g, '*');
      equation = equation.replace(/÷/g, '/');
      result = Math.round(eval(equation)*10000)/10000;
      input = result;
      operatorFlag = true;   
}
//    print to the display screen
    output.value = input;
}   
}