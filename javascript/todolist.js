var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit") {
  // handle input
  if(input === "list") {
    listTodos();
    } else if(input === "new") {
    addTodo();
    } else if(input === "delete") {
    deleteTodo();
    }
    // ask again for new input
    input = prompt("What would you like to do?");
  }
  console.log("OK, YOU QUIT THE APP ... HOPE YOU'RE HAPPY");

function listTodos() {
  console.log("***********")
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
  });
  console.log("***********");
}

function addTodo(){
  // ask for new to do
  var newTodo = prompt("Enter new to do?");
  // add to dos to array
  todos.push(newTodo);
  console.log(newTodo + " added to list")
}

function deleteTodo(){
  //ask for index of to do to be deleted
  var index = prompt("Enter index of to do to delete");
  //delete that to do
  //splice() - asks first for the index to be deleted then the number of items from there to be deleted
  todos.splice(index, 1);
  console.log("Deleted to do")
}
