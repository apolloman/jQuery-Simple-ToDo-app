$(document).ready(function() {

  $("#add").on('click', function() {
    var val = $("input").val();
    if(val !== '') {
        var elem = $("<li></li>").text(val);
      $(elem).append("<button class='remove'>X</button>");
      $("#myList").append(elem);
      $("input").val("");
      $(".remove").on('click', function(){
        $(this).parent().remove();
      });
    }

    $("#myList > li").on('click', function(){
      $(this).toggleClass('line');
    });

  });





}); // END Ready function


(function(){
  var icon = document.querySelector('.icon');
  icon.addEventListener('click', changeIcon);
  var todoCon = document.querySelector('.todoCon');

  function changeIcon() {
      icon.classList.toggle('change');
      todoCon.classList.toggle('display');
  }

})();


