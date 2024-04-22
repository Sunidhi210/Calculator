let myresult = document.getElementById("result");

let expression = "";

function display(value) {
  expression += value; 
  myresult.value = expression; 
}

function Clear() {
  expression = '';
  myresult.value = '0'; 
}

function del() {
  expression = expression.slice(0, -1); 
  myresult.value = expression; 
}

function Calculate() {
  try {
    const result = eval(expression); 
    myresult.value = result; 
    expression = ''; 
  } catch (error) {

    myresult.value = 'Error';
    expression = '';
  }
}
