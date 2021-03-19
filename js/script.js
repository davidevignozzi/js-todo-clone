

$(".to-do").on("click", ".delete",function(){
    $(this).parent().remove();
  }
);

// inserisco nella label, premi invio, 
$("#addlist").keydown(function(e){

  if (e.which == 13) {
    var task = $(this).val();
    if (task != "") {
      var cloneTemplate = $(".template ul li").clone();
      cloneTemplate.prepend(task);
      $(".to-do").append(cloneTemplate);
      $(this).val("");
    }
  }
});
  