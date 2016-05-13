function isEven(num) {
  //return true if even
  return (num % 2 === 0);
}
//     return true;
//   }
//   //return false if otherwise
//   else {
//     return false;
//   }
// }


function factorial(num){
  // define a result variable
  var result = 1;
  //calculate factorial and store value in result
  for(var i = 2; i <= num; i++) {
    result *= i;
  }
  // return a result variable
  return result;
}
// factorial  4 x 3 x 2 x 1


function kebabToSnake(str){
  //replace all dashes with underscores
  var newStr = str.replace(/-/g , "_");
  //return str
  return newStr;
}
