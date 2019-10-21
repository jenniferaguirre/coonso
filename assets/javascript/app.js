var card = $("#quiz-area");

var questions = [
  {
    question: "What is Jack's dog's name",
    answers: ["Sally", "Boo", "Sparky", "Zero"],
    correctAnswer: "Zero"
  },
  {
    question: "Where does Sally keep her sewing needle?",
    answers: ["Her shoe,", "Behind her ear", "On her ackpack", "At home"],
    correctAnswer: "Behind her ear"
  },
  {
    question: "What shape  is the door to Christmas town?",
    answers: ["Tree", "Bell", "Santa Claus", "Snowflake"],
    correctAnswer: "Tree"
  },
  {
    question: "What shape is Jack's bow tie ?",
    answers: ["Spider", "Bat", "Skeleton", "Candy Cane"],
    correctAnswer: "Bat"
  },
 

];


var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 100,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var k = 0; k < questions[i].answers.length; k++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[k] + "''>" + questions[i].answers[k]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});

  
  //$(documento).on("click", "#restart", function() {
      //game.restart();
    //});