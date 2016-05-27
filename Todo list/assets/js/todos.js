// Check off a specific to-do by clicking.
// You have to put the click listener on the parent item because that is on the page when it loads (the "li" might not be because we're adding those later)
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});
// click on X to delete to-do
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text'").on("keypress", function(event){
  if(event.which === 13){
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add it to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text'").fadeToggle();
});
