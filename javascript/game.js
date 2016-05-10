var secretNumber = 4;

var guess = prompt("Guess a number");

if(Number(guess) === secretNumber) {
  alert("You got it!!!");
}
else if(Number(guess) > secretNumber) {
  alert("That's too high");
}
// else(Number(guess) > secretNumber + 20) {
//   alert("That's way too high");
// }
else {
  alert("That's too low");
}
// else(Number(guess) < secretNumber - 20) {
//   alert("That's way too low");
// }
