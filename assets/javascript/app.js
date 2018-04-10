$(document).ready(function () {


  var counter = $("#count");
  $("#quiz-area").hide();
  $("#quiz-results").hide();
  $(".check").hide();
  $("#count").show();
  $(".h2").show();
  $(".reset").hide();

  $(".check").on('click', function (event) {
    // Prevent page from reloading
    event.preventDefault();

    // clearInterval();
    $("#quiz-area").hide();
    $("#quiz-results").show();
    $(".check").hide();
    $(".h2").hide();
    $("#count").hide();
    $(".startClock").hide();
    $(".reset").show();
    $("#quiz-results").addClass("resultspage");

    var selValue = parseInt($('input[name=q1]:checked').val())
    var selValue2 = parseInt($('input[name=q2]:checked').val())
    var selValue3 = parseInt($('input[name=q3]:checked').val())
    var selValue4 = parseInt($('input[name=q4]:checked').val())
    
    // var finalScore = $("#quiz-results").html("Your Final Score: " + (selValue))

    // var finalScore = $("#quiz-results").html("Your Final Score: " + (selValue2))

    // var finalScore = $("#quiz-results").html("Your Final Score: " + (selValue3))

    // var finalScore = $("#quiz-results").html("Your Final Score: " + (selValue4))

    var finalScore = $("#quiz-results").html("Your Final Score: " + (selValue + selValue2 + selValue3 + selValue4))
   

    function myStopFunction() {
      clearInterval(counter);
  }
  myStopFunction();
  });

  $(".startClock").click(function () {

    if(counter = 30){
      $("#quiz-area").show();
      $(".check").show();
      $("#count").show();
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
        $(".h2").hide();
        $("#count").hide();
        $(".startClock").hide();

      }

    }, 1000);

  });

  $(".reset").on('click', function (event) {


$("#quiz-area").hide();
  $("#quiz-results").hide();
  $(".check").hide();
  $("#count").show();
  $(".h2").show();
  $(".reset").hide();
  $("#count").reset();


});
  
  var btn = document.querySelector('.mouse-cursor-gradient-tracking')
  btn.onmousemove = function (e) {
    var x = e.pageX - btn.offsetLeft
    var y = e.pageY - btn.offsetTop
    btn.style.setProperty('--x', x + 'px')
    btn.style.setProperty('--y', y + 'px')
  }




});