



function showDate(){
  let d = new Date();
  document.getElementById("out1").innerHTML = d;
}




function greetUser(){
  let f = prompt("Enter First Name");
  let l = prompt("Enter Last Name");
  document.getElementById("out2").innerHTML =
  "Hello " + f + " " + l;
}


function addNumbers(){
  let a = +prompt("Enter first number");
  let b = +prompt("Enter second number");
  document.getElementById("out3").innerHTML =
  "Sum = " + (a + b);
}
function calculator(){
  let n1 = +prompt("Enter num1");
  let n2 = +prompt("Enter num2");
  let op = prompt("Enter operator + - * /");
  let result;
  if(op==="+") result = n1+n2;
  else if(op==="-") result = n1-n2;
  else if(op==="*") result = n1*n2;
  else if(op==="/") result = n1/n2;
  document.getElementById("out4").innerHTML =
  "Result = " + result;
}
function squareNum(){
  let n = +prompt("Enter number");
  document.getElementById("out5").innerHTML =
  "Square = " + (n*n);
}
function factorial(){
  let n = +prompt("Enter number");
  let f = 1;
  for(let i=1;i<=n;i++) f*=i;
  document.getElementById("out6").innerHTML =
  "Factorial = " + f;
}
function counting(){
  let s = +prompt("Start");
  let e = +prompt("End");
  let txt="";
  for(let i=s;i<=e;i++) txt+=i+" ";
  document.getElementById("out7").innerHTML = txt;
}