var romanNumberals = ["I", "V", "X", "L", "C", "D", "M"]
var answers= "";
// 1"I", 5"V", 10"X", 50"L", 100"C", 500"D", 1000"M"

var romanize = function(inputFromUser) {
  // var answers= "";
  var input1=inputFromUser;

for (i=0; i< 10; i++) {

  if(input1 > 3999){
    alert(input1);
    alert("our final answer "+answer);
    break;
  }
  else if (input1 >= 1000 ) {
    // answers = answers.push("v");
    input1 = input1 - 1000;
    answers = answers.concat("M");
alert(" " +inputFromUser+ " minus this roman numeral " +answers+ " equals " +input1);
    alert(input1);
  } else if (input1 >= 500 ) {
    // answers = answers.push("v");
    input1 = input1 - 500;
    answers = answers.concat("D");
alert(" " +input1+ " minus this roman numeral " +answers+ " equals "+input1);
    alert(input1);
  } else if (input1 >= 100 ) {
    // answers = answers.push("v");
    input1 = input1 - 100;
    answers = answers.concat("C");
    alert(" " +input1+ " minus this roman numeral " +answers+ " equals "+input1);
    alert(input1);
  }
  else if (input1 >= 50 ) {
    // answers = answers.push("v");
    input1 = input1 - 50;
    answers = answers.concat("L");
alert(" " +input1+ " minus this roman numeral " +answers+ " equals "+input1);
    alert(input1);
  }
  else if (input1 >= 10 ) {
    // answers = answers.push("v");
    input1 = input1 - 10;
    answers = answers.concat("X");
alert(" " +input1+ " minus this roman numeral " +answers+ " equals "+input1);
    alert(input1);
  }
  else if (input1 >= 5 ) {
    // answers = answers.push("v");
    input1 = input1 - 5;
    answers = answers.concat("V");
alert(" " +input1+ " minus this roman numeral " +answers+ " equals "+input1);
    alert(input1);
  }
  else if (input1 > 0 ) {
    // answers = answers.push("v");
    input1 = input1 - 1;
    answers = answers.concat("I");
alert(" " +input1+ " minus this roman numeral " +answers+ " equals "+input1);
    alert(input1);
  } else if (input1 = 0) {
    alert("done " +answer);
    break;
  }
}
return answers;


$(document).ready(function() {
  $("form#form-whole").submit(function(event) {
    event.preventDefault();
    var inputFromUser = parseInt($("#name").val());




// outPutToUser= romanize(inputFromUser);
//    $("#result").text(answers);
  });
});
