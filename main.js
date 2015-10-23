var x, y;
// function getValues()
// {
//     x = Number(document.getElementById('num_one').value);
//     y = Number(document.getElementById('num_two').value);
//
//     return x, y;
// }

document.addEventListener("DOMContentLoaded", function(event){
  document.getElementById("calculateBtn").addEventListener("click", function(event){
function sum(x, y)
{
  x = Number(document.getElementById('num_one').value);
  y = Number(document.getElementById('num_two').value);
  return x + y;
  // document.getElementById("answer").innerHTML = z;
};

document.getElementById('answer').innerHTML = sum(x, y).toString();
});
});
