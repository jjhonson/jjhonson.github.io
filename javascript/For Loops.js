console.log("Print All Numbers Between -10 and 19");
// var num = -10;
// while (num<20) {
//   console.log(num);
//   num++;
// }
for (var i = -10; i < 20; i++) {
  console.log(i);
}

console.log("Print all even numbers betwen 10 and 40");
// var evens = 10;
// while (evens<=40) {
//   console.log(evens);
//   evens+=2;
// }
//
// for (var i = 10; i <=40; i+=2) {
//   console.log(i);
// }

for(var i = 10; i <= 40; i += 1){
  if (i % 2 === 0) {
    console.log(i)
  }
}

console.log("Print all odd numbers betwen 300 and 333");
// var odds = 300;
// while (odds<=333) {
//   if (odds % 2 === 1)
//   console.log(odds);
//   odds++;
// }

for(var i = 300; i <= 333; i += 1){
  if (i % 2 !== 0) {
    console.log(i)
  }
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
// var divis = 5;
// while (divis<=50) {
//   if (divis % 5 === 0 && divis % 3 === 0){
//   console.log(divis);
//   }
//   divis+=1;
// }

for(var i = 5; i <= 50; i += 1){
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i)
  }
}
