// var answer = prompt("Are we there yet?");
//
// while(answer !== "yes" && answer !== "yeah") {
//   var answer = prompt("Are we there yet?");
// }
//
// if(answer +++ "yes") {
//   alert("Yay, we made it!!")
// }

// VERSION 2 - include indexOf so that any answer with the right answer in it works

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") && answer.indexOf("yeah") ===-1) {
  var answer = prompt("Are we there yet?");
}

if(answer +++ "yes") {
  alert("Yay, we made it!!")
}
