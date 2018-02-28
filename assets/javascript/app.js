$(document).ready(function(){

  

var counter
    
    $(".startClock").click( function(){
       
            counter = 59;
          
            setInterval(function() {
              counter--;
              if (counter >= 0) {
                span = document.getElementById("count");
                span.innerHTML = counter;
              }
              // Display 'counter' wherever you want to display it.
              if (counter === 0) {
              //    alert('this is where it happens');
                  // clearInterval(counter);
                  setTimeout(function(){
                    alert("Time Out!");
                  });
                 
              }
          
            }, 1000);
          
          })();

          

 });







