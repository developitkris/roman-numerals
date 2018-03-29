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
var roman= ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var number=[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var output = "";

function romanize(integer){
  console.log("Im in here!")
  var output = "";

    while(integer>0){
    console.log("after for loop");
    for(i in number) {
    if (integer >= number[i]){
      output+=roman[i];
      integer-= number[i];
    };
};
  };
return output;
};
