var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit") {
  // handle input
  if(input === "list") {
    console.log("***********")
    todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
    });
    console.log("***********")
  } else if(input === "new") {
    // ask for new to do
    var newTodo = prompt("Enter new to do?")
    // add to dos to array
    todos.push(newTodo);
  }
  // ask again for new input
  input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP ... HOPE YOU'RE HAPPY");
