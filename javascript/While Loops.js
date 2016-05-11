console.log("Print All Numbers Between -10 and 19");
var num = -10;
while (num<20) {
  console.log(num);
  num++;
}

console.log("Print all even numbers betwen 10 and 40");
var evens = 10;
while (evens<=40) {
  console.log(evens);
  evens+=2;
}

console.log("Print all odd numbers betwen 300 and 333");
var odds = 300;
while (odds<=333) {
  if (odds % 2 === 1)
  console.log(odds);
  odds++;
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
var divis = 5;
while (divis<=50) {
  if (divis % 5 === 0 && divis % 3 === 0){
  console.log(divis);
  }
  divis+=1;
}
