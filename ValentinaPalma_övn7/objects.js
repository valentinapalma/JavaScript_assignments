//UPPGIFT 1
var myObject = {
  "key": "value",
  "key2": "value2"
}


//UPPGIFT 2
var foo = new Object(); //Ett sätt
var foo = {}; // Ett annat sätt


//UPPGIFT 3
// Det andra sättet, alltså var foo = {};


//UPPGIFT 4
var myDog = {
  "name": "Django",
  "age": 4
};


//UPPGIFT 5
var uppgiftFem = {
  sayHello() {
    console.log('Hejsan');
  }
};

uppgiftFem.sayHello();


//UPPGIFT 6
var uppgiftSex = {
  whatsYourName(name) {
    console.log('Hej ' + name)
  }
};

uppgiftSex.whatsYourName('Valentina');


//UPPGIFT 7
var uppgiftSju = {};
for (var i = 1; i <= 3; i++) {
    uppgiftSju['password' + i] = i;
};

console.log(uppgiftSju);


//UPPGIFT 8
var uppgiftEight = {
  speed: 14,
  height: 10,
  init: function() {
    speed2();
    height2();
  }
};

function speed2() {
  uppgiftEight.speed += 2;
  console.log(uppgiftEight.speed);
};

function height2() {
  uppgiftEight.height += 1;
  console.log(uppgiftEight.height);
};

uppgiftEight.init();
uppgiftEight.init();
uppgiftEight.init();


//UPPGIFT 9
var object = {
  season: "Winter",
  year: 2019,
  month: "January"
};

function skrivUt (a) {
  console.log(object.season);
};

skrivUt(object);


//UPPGIFT 10
var dotNotation = {};

dotNotation.color = "Black";
dotNotation.year = 2019;
dotNotation.tired = true;

console.log(dotNotation);


//UPPGIFT 11
var bracketNotation = {};

bracketNotation["month"] = "January";
bracketNotation["day"] = 15;
bracketNotation["1994"] = true;

console.log(bracketNotation);


//UPPGIFT 12
var uppgiftTolv = {
  hairColor: "Brown",
  hairStyle: "Fishtail braid",
  hairLength: "Long",
};

function ani(h) {
  hair = h.hairColor || null
  style = h.hairStyle || null
  length = h.hairLength || null
  console.log(hair, style, length);
};

ani(uppgiftTolv);


//UPPGIFT 13
console.log(Object.keys(uppgiftTolv));


//UPPGIFT 14
console.log(Object.keys(uppgiftTolv).length);


//UPPGIFT 15
var kortlek = ["Spader Två", "Spader Tre", "Spader Fyra", "Spader Fem", "Spader Sex", "Spader Sju", "Spader Åtta", "Spader Nio", "Spader Tio", "Spader Knekt", "Spader Dam", "Spader Kung", "Spader Ess", "Hjärter Två", "Hjärter Tre", "Hjärter Fyra", "Hjärter Fem", "Hjärter Sex", "Hjärter Sju", "Hjärter Åtta", "Hjärter Nio", "Hjärter Tio", "Hjärter Knekt", "Hjärter Dam", "Hjärter Kung", "Hjärter Ess", "Klöver Två", "Klöver Tre", "Klöver Fyra", "Klöver Fem", "Klöver Sex", "Klöver Sju", "Klöver Åtta", "Klöver Nio", "Klöver Tio", "Klöver Knekt", "Klöver Dam", "Klöver Kung", "Klöver Ess", "Ruter Två", "Ruter Tre", "Ruter Fyra", "Ruter Fem", "Ruter Sex", "Ruter Sju", "Ruter Åtta", "Ruter Nio", "Ruter Tio", "Ruter Knekt", "Ruter Dam", "Ruter Kung", "Ruter Ess"];

kortlek.sort(function() {
  return 0.5 - Math.random();
});

var cards = {};
var player1 = {};
var player2 = {};
var player3 = {};
var player4 = {};

for (i = 0; i < 52; i++) {
  cards['cards' + (i + 1)] = kortlek[i];
};

var x = 1;
for (i = 0; i < 13; i++) {
  player1[(i + 1)] = cards["cards" + x];
  delete cards["cards" + x];
  x++;
  player2[(i + 14)] = cards["cards" + x];
  delete cards["cards" + x];
  x++;
  player3[(i + 27)] = cards["cards" + x];
  delete cards["cards" + x];
  x++;
  player4[(i + 40)] = cards["cards" + x];
  delete cards["cards" + x];
  x++;
};

console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);


//UPPGIFT 16
var object1 = {
  random: "Sun",
  vegetable: "Lemon",
  flower: "Daffodil"
};

var object2 = {
  color: "Yellow",
  fruit: "Banana"
};

object2 = Object.assign(object1,{color:"Yellow",fruit:"Banana"});
console.log(object2);


//UPPGIFT 17
var login = {
  user: "Nyx",
  password: 12345
};

var details = Object.freeze(login);
console.log(details);


//UPPGIFT 18
var demCards = ["Spader Två", "Spader Tre", "Spader Fyra", "Spader Fem", "Spader Sex", "Spader Sju", "Spader Åtta", "Spader Nio", "Spader Tio", "Spader Knekt", "Spader Dam", "Spader Kung", "Spader Ess", "Hjärter Två", "Hjärter Tre", "Hjärter Fyra", "Hjärter Fem", "Hjärter Sex", "Hjärter Sju", "Hjärter Åtta", "Hjärter Nio", "Hjärter Tio", "Hjärter Knekt", "Hjärter Dam", "Hjärter Kung", "Hjärter Ess", "Klöver Två", "Klöver Tre", "Klöver Fyra", "Klöver Fem", "Klöver Sex", "Klöver Sju", "Klöver Åtta", "Klöver Nio", "Klöver Tio", "Klöver Knekt", "Klöver Dam", "Klöver Kung", "Klöver Ess", "Ruter Två", "Ruter Tre", "Ruter Fyra", "Ruter Fem", "Ruter Sex", "Ruter Sju", "Ruter Åtta", "Ruter Nio", "Ruter Tio", "Ruter Knekt", "Ruter Dam", "Ruter Kung", "Ruter Ess"];
var whatCard = {};
var k = 1;

demCards.sort(function() {
  return 0.5 - Math.random();
});

for (var i = 0; i < 52; i++) {
  whatCard['cards' + (i + 1)] = demCards[i];
};

for (var i = 0; i < 52; i++) {
  var guess = prompt("Gissa vilken färg kortet kommer att ha. \nRött eller svart?")

  if (guess == "rött" && whatCard["cards" + k].includes("Hjärter") || guess == "rött" && whatCard["cards" + k].includes("Ruter")) {
    var question = prompt("Grattis! Du gissade rätt! Kortet var Rött " +whatCard["cards" + k]+ " vill du spela igen? \nSkriv: ja eller nej");

    if (question == "nej") {
      alert("Tack för att du spelade! Ha en fortsatt trevlig dag!");
      break;
    }
  } else if (guess == "svart" && whatCard["cards" + k].includes("Spader") || guess == "svart" && whatCard["cards" + k].includes("Klöver")) {
    var questionTwo = prompt("Grattis! Du gissade rätt! Kortet var Svart " +whatCard["cards" + k]+ " vill du spela igen? \nSkriv: ja eller nej");
    if (questionTwo == "nej") {
      alert("Tack för att du spelade! Ha en fortsatt trevlig dag!");
      break;
    }
  } else {
    var question = prompt("Buuu... fel gissning. Vill du spela igen? \nSkriv: ja eller nej");
  }

  if (question == "nej") {
    break;
  }

  delete whatCard["cards" + k];
  k++;
};
