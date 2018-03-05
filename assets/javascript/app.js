$(document).ready(function () {
  var panel = $("#quiz-area");
  var wins = 0;
  var losses = 0;
  var counter
  $("#quiz-area").hide();
  $("#quiz-results").hide();
  $(".check").hide();


  $(".check").on('click', function (event) {
    // Prevent page from reloading
    event.preventDefault();
    $("#quiz-area").hide();
    $("#quiz-results").show();
    $(".check").hide();

    $("#quiz-results").addClass("resultspage");

    var selValue = parseInt($('input[name=q1]:checked').val())
    var selValue2 = parseInt($('input[name=q2]:checked').val())
    var selValue3 = parseInt($('input[name=q3]:checked').val())
    var selValue4 = parseInt($('input[name=q4]:checked').val())
    console.log(selValue, selValue2, selValue3);
    //   if (val=0){

    //     document.write("<h2>Wrong Answer<h2>")
    //   }else

    //   {document.write("<h2>Correct!<h2>")

    // }
    // $("#quiz-results").html("<h1> Your Final Score is: </h1>");


    $("#quiz-results").html("Your Final Score: " + (selValue + selValue2 + selValue3 + selValue4));


  });




  $(".startClock").click(function () {

    if(counter = 5){
      $("#quiz-area").show();
      $(".check").show();

    }

    setInterval(function () {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      // Display 'counter' wherever you want to display it.
      if (counter === 0) {

        // clearInterval(counter);
        // setTimeout(function () {

        $("#quiz-area").hide();
        $("#quiz-results").show();
        $(".check").hide();
        $("#quiz-results").addClass("resultspage");
        $("#quiz-results").html("Time's Up")


      }

    }, 1000);

  });



});