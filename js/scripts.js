//User Logic
$(document).ready(function() {
  $("form#romanForm").submit(function(event) {
    event.preventDefault();

    var userNum = parseInt($("#numberInput").val());
    var finalResult =  romanize(userNum);
    alert(finalResult);

    $("#result").text(finalResult);



  });
});





//Business Logic
var roman= ["M", "D", "C", "L", "X", "V", "I"];
var number=[1000, 500, 100, 50, 10, 5, 1];
var output = "";

function romanize(integer){
  console.log("Im in here!")
  for(var i=0; i<integer; i++){
    console.log("after for loop");
    if (integer >= number[i]){
      output+=roman[i];
      integer-= number[i];

    };

  };
return output;
};
