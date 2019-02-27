(function million() {

  var questions = ["Heter det JavaScript eller JavaLanguage?", "Är snö vitt eller svart?"];
  var answer = ["JavaScript", "vitt"];
  var whatQuestion = Math.floor(Math.random() * questions.length);
  var randomQuestion = questions[whatQuestion];
  var gameAnswer = prompt(randomQuestion);

  if (gameAnswer == answer[whatQuestion]) {
    alert("Du gissade rätt! Grattis! Du har vunnit en miljon!!");
  } else {
    alert("Du har förlorat! Buuu...");
  }

}());
