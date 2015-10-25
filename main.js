var num1;
var num2;
var operator;
var answer=0;

function dothemath(pass){
pass.addEventListener("click", function() {
  num1 = Number(document.getElementById('window').value);
  document.getElementById('window').value = "";
  operator = pass.value;
});

}


document.addEventListener("DOMContentLoaded", function(event){
  function clickHandler(event){
  event.addEventListener("click", function() {
    document.getElementById('window').value += event.value;
  });
};

clickHandler(document.getElementById("num7"));
clickHandler(document.getElementById("num8"));
clickHandler(document.getElementById("num9"));
clickHandler(document.getElementById("num4"));
clickHandler(document.getElementById("num5"));
clickHandler(document.getElementById("num6"));
clickHandler(document.getElementById("num3"));
clickHandler(document.getElementById("num2"));
clickHandler(document.getElementById("num1"));
clickHandler(document.getElementById("num0"));
clickHandler(document.getElementById("dot"));
dothemath(document.getElementById("divide"));
dothemath(document.getElementById("minus"));
dothemath(document.getElementById("times"));
dothemath(document.getElementById("plus"));

document.getElementById("equals").addEventListener("click", function() {
  num2 = Number(document.getElementById('window').value);
  if (operator === "/") {
    answer = num1/num2;
  }
  else if (operator === "x") {
    answer = num1*num2;
  }
  else if (operator === "-") {
    answer = num1-num2;
  }
  else if (operator === "+") {
    answer = num1+num2;
  }
  document.getElementById('window').value=answer;

console.log(num1, num2)
})
  document.getElementById("clear").addEventListener("click", function(){
  document.getElementById('window').value = "";
  });
});
