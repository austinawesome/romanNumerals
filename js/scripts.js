var romanNumberals = ["I", "V", "X", "L", "C", "D", "M"]
var answers = "";
// 1"I", 5"V", 10"X", 50"L", 100"C", 500"D", 1000"M"

var romanize = function(inputFromUser) {
    // var answers= "";
  var input1 = inputFromUser;

  for (i = 0; i < 10; i++) {
    if (input1 > 3999) {
      //alert(input1);
      alert("our final answer " + answer);
      break;
    } else if (input1 >= 1000) {
      input1 = input1 - 1000;
      answers = answers.concat("M");
      //alert(" " + inputFromUser + " minus this roman numeral " + answers + " equals " + input1);
      //alert(input1);
      console.log("caught this first");
    } else if (input1 >= 500) {
      if (input1 >= 900) {
        input1 = input1 - 900;
        answers = answers.concat("CM");
      } else {
        input1 = input1 - 500;
        answers = answers.concat("D");
      }
    //  alert(" " + input1 + " minus this roman numeral " + answers + " equals " + input1);
      //alert(input1);
    } else if (input1 >= 100) {
      if (input1 >= 400) {
        input1 = input1 - 400;
        answers=answers.concat("CD");
        //alert(input1);
      } else {// answers = answers.push("v");
      input1 = input1 - 100;
      answers = answers.concat("C");
    }
    //  alert(" " + input1 + " minus this roman numeral " + answers + " equals " + input1);
      //alert(input1);
    } else if (input1 >= 50) {
      if (input1 >= 90) {
        input1 = input1 - 90;
        answers=answers.concat("XC");
        //alert(input1);
        console.log("caught this 2");
      } else {
        // answers = answers.push("v");
        input1 = input1 - 50;
        answers = answers.concat("L");
      }
    //  alert(" " + input1 + " minus this roman numeral " + answers + " equals " + input1);
      //alert(input1);
    } else if (input1 >= 10) {
      if (input1 >= 40) {
        input1 = input1 - 40;
        answers=answers.concat("XL");
        //alert(input1);
        console.log("caught this 2");
      } else {
      input1 = input1 - 10;
      answers = answers.concat("X");
    }
    //  alert(" " + input1 + " minus this roman numeral " + answers + " equals " + input1);
      //alert(input1);
    } else if (input1 >= 5) {
      if (input1 >= 9) {
        input1 = input1 - 9;
        answers=answers.concat("XI");
        //alert(input1);
        console.log("caught this 2");
      } else {
      // answers = answers.push("v");
      input1 = input1 - 5;
      answers = answers.concat("V");
}
    //  alert(" " + input1 + " minus this roman numeral " + answers + " equals " + input1);
      //alert(input1);
      console.log("caught this 3");
    } else if (input1 > 0) {
      if (input1 >=4) {
        input1 = input1 - 4 ;
        answers = answers.concat("IV")
      } else {
      // answers = answers.push("v");
      input1 = input1 - 1;
      answers = answers.concat("I");
    }
    //  alert(" " + input1 + " minus this roman numeral " + answers + " equals " + input1);
      //alert(input1);
    } else if (input1 = 0) {
      alert("done " + answer);
      break;
    }
  }
}



    $(document).ready(function() {
      $("form#form-whole").submit(function(event) {
        event.preventDefault();
        var inputFromUser = parseInt($("#name").val());




        outPutToUser= romanize(inputFromUser);
          //  $("#result").text(answers "");
          $("#results").append("<li>" + answers + "</li>");

      });
    });
