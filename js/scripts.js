//User Logic
$(document).ready(function() {
  $("form#romanForm").submit(function(event) {
    event.preventDefault();

    $(".result").show();



  });
});
var userNum = $("#numberInput").val();




//Business Logic
var roman= ["M", "D", "C", "L", "X", "V", "I"];
var numbers=[1000, 500, 100, 50, 10, 5, 1];
