// ** printReverse() **
// for loop -> starts at the end and returns each item in array then subtracts one until it gets to 0
console.log("printReverse function");

function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

// *** isUniform() **
// sets the first item as "first", then starting at second item checks to see if it is equal to "first" - if not returns false
console.log("isUniform function");

function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}

// ** sumArray() **
// starts with a var called "total" set at 0 -> using forEach loop, adds each item to total and that becomes the new total
console.log("sumArray function");

function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element) {
        total += element;
    })
    return total;
}

// ** max() **
// sets a var called "max" and designates the first item in array as "max" -> compairs all other items in array and if they are greater they become the new max
console.log("max function");

function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
