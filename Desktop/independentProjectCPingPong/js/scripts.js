var pingPong = function(number) {
  // change for ping-pong
  if ((number % 3 === 0) && (number % 5 === 0)){
    return ".ping-pong";

  } else if (number % 3 === 0) {
    return ".ping";

  } else if (number % 5 === 0){
    return ".pong";
  } else {
    return number;
  }
};





$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong();
    $(".ping-pong").text();
    $(".ping").text();
    $(".pong").text();

    }

    $("#result").show();
  });
});
