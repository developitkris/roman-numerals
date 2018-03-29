//User Logic
$(document).ready(function() {
  $("form#romanForm").submit(function(event) {
    event.preventDefault();

    var userNum = parseInt($("#numberInput").val());
    var finalResult =  romanize(userNum);

    $("#result").text(finalResult);



  });
});


//Business Logic
var roman= ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var number=[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var output = [];

function romanize(integer){
  console.log("Im in the loop!")
  var output = [];

  // console.log("after for loop");
  for(var i = 0;i<number.length;i++) {
    var thisNumber = number[i];
    while(integer>=thisNumber){
      console.log(thisNumber);
      output.push(roman[i]);
      integer-= thisNumber;
    }
  };
  return output.join("");
};


//integer = 249 (== CXCLIX)
//output = ""
//i = [4]
//number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
//roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

//roman[i] =C
//number[i] =100
