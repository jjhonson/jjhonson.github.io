var button = document.querySelector("button");
var paragraph = document.querySelector("p");
var background = document.querySelector("body");

button.addEventListener("click", function() {
  paragraph.textContent = "Someone clicked the button! :)";
});

var h1 = document.querySelector("h1");

h1.addEventListener("mouseover", function(){
  h1.style.color = "Orange";
});

h1.addEventListener("click", function(){
  h1.style.color = "Green";
});

var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++){
  lis[i].addEventListener("click", function(){
    this.style.color = "Pink";
  });
}
// "this" makes it so you're selecting a specific item (li in this case)

var color = document.querySelector(".colorbutton");
// have to use the "querySelector" instead of "querySelectorAll" here for some reason

color.addEventListener("click", function(){
  if (background.style.background === "purple"){
    background.style.background=null;
  } else {
    background.style.background="purple";
  }
});
