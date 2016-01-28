var pingPong = function(pingPongNumber) {

var sequence = []

if (pingPongNumber < 1){
  alert("Enter a number greater than 1");
}
  for (var i = 1; i <= pingPongNumber; i+= 1)

    if (((i % 3) === 0) && ((i % 5) === 0)) {
      sequence.push("pingpong");
    } else if (i % 3 === 0) {
      sequence.push("ping");
    } else if (i % 5 === 0) {
      sequence.push("pong");
    } else {
      sequence.push(i);
    }
    return sequence;
};

$(document).ready(function() {
  $("form#pingPong").submit(function(event){
    var input = parseInt($("input#input").val());
    var result = pingPong(input);
    $("#results").empty();

    // results.forEach(function(result){
      $("#results").append("<li>" + result + "</li>");


    // });

    event.preventDefault();
    });


  });


//   var sequence = [];
//    {
//     sequence.print(i)
//   }
//     return sequence;
// }
//
// var output = function(input) {
//   var sequence = pingpong.concat("");
//     if (i % 15 === 0) {
//       sequence.print("pingpong");
//     } else if (i % 5 === 0) {
//       sequence.print("pong");
//     } else if (i % 3 === 0) {
//       sequence.print("ping");
//     }
//   }
