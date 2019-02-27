//UPPGIFT 1
var a = 10, b = 20;
if (a == b) {
  console.log("Sifforna är detsamma, grattis!")
} else {
  console.log("Oh nej... siffrorna är olika")
}


//UPPGIFT 2
if (a != b) {
  console.log("Siffrorna är inte detsamma");
} else {
  console.log("Siffrorna är detsamma");
};


//UPPGIFT 3
var language = "spanish";

if (language == "finnish" ) {
  console.log("Tervetuloa");
} else if (language == "english") {
  console.log("Welcome");
} else if (language == "swedish") {
  console.log("Välkommen");
} else if (language == "italian") {
  console.log("Benvenuto");
} else if (language == "spanish") {
  console.log("Bienvenidos");
} else {
  console.log("Denna person verkar kunna ett språk vi inte behärskar");
};


//UPPGIFT 4
var Kalle = 10, Frida = 20, Anna = 30, Pontus = 40, Johan = 50;

if (Kalle < 14) {
  console.log("Underkänd");
} else if (Kalle < 39) {
  console.log("Godkänd");
} else {
  console.log("Väl godkänd");
};

if (Frida < 14) {
  console.log("Underkänd");
} else if (Frida < 39) {
  console.log("Godkänd");
} else {
  console.log("Väl godkänd");
};

if (Anna < 14) {
  console.log("Underkänd");
} else if (Anna < 39) {
  console.log("Godkänd");
} else {
  console.log("Väl godkänd");
};

if (Pontus < 14) {
  console.log("Underkänd");
} else if (Pontus < 39) {
  console.log("Godkänd");
} else {
  console.log("Väl godkänd");
};

if (Johan < 14) {
  console.log("Underkänd");
} else if (Johan < 39) {
  console.log("Godkänd");
} else {
  console.log("Väl godkänd");
};


//UPPGIFT 5
var leftLeg = "böjt";
var rightLeg = "highkick";
var body = "sitter";

if (body = "sitter") {
  if (leftLeg = "böjt") {
    if (rightLeg = "highkick") {
      console.log("Roboten "+body+" ner, har vänster ben "+leftLeg+" och höger ben "+rightLeg+" och är påväg att göra en piruett");
    }
  }
} else {
      console.log("Roboten "+body+" upp, har vänster ben "+leftLeg+" och höger ben "+rightLeg+" och laddar upp för något riktigt speciellt.");
};


//UPPGIFT 6
if (body == "sitter" && leftLeg == "böjt" && rightLeg == "highkick") {
  console.log("Roboten "+body+" ner, har vänster ben "+leftLeg+" och höger ben "+rightLeg+" och är påväg att göra en piruett");
} else {
  console.log("Roboten "+body+" upp, har vänster ben "+leftLeg+" och höger ben "+rightLeg+" och laddar upp för något riktigt speciellt.");
};


//UPPGIFT 7
var answer = prompt("Fyll i ett lösenord");
var confirm = prompt ("Bekräfta lösenord");

if (answer == confirm) {
    alert("Välkommen!");
  } else {
    alert("Lösenorden stämmer inte överens. Försök igen");
};


//UPPGIFT 8
//Math.random är en funktion som returnerar en slumpmässig siffra mellan 0 - 1


//UPPGIFT 9
var number = Math.random();

if (number < 0.5) {
  console.log(number);
} else if (number > 0.8) {
  console.log("Secret");
};


//UPPGIFT 10
var myWallet = 550;
var kattMat = 65.99;
var total = Math.floor(myWallet / kattMat);

if (myWallet < kattMat) {
  console.log("Jag måste hem och hämta pengar.");
} else if (myWallet > kattMat) {
  console.log("Jag kan köpa " +total+ " burkar kattmat.");
};


//UPPGIFT 11
var input = prompt("Skriv Michael Jackson eller Bob Marley");
var result = 0;

if (input == "Michael Jackson") {
  var inputOne = prompt ("Vilket år dog han?");
};

if (inputOne == "2009") {
  result++;
  var inputTwo = prompt ("I vilken amerikansk delstat föddes han?");
} else {
  var inputTwo = prompt ("I vilken amerikansk delstat föddes han?");
};

if (inputTwo == "Indiana") {
  result++;
  var inputThree = prompt ("Vilket år fick han en stjärna på 'Hollywood Walk of Fame'?");
} else {
  var inputThree = prompt ("Vilket år fick han en stjärna på 'Hollywood Walk of Fame'?");
};

if (inputThree == "1984") {
  result++;
  var inputFour = prompt ("Hur många Grammys har han vunnit?");
} else {
  var inputFour = prompt ("Hur många Grammys har han vunnit?");
};

if (inputFour == "18") {
  result++;
  var inputFive = prompt ("Vilken låt har texten: 'It's close to midnight, and something evil's lurkin' through the walls'?");
} else {
  var inputFive = prompt ("Vilken låt har texten: 'It's close to midnight, and something evil's lurkin' through the walls'?");
};

if (inputFive == "Thriller") {
  result++;
  alert("Slut! Du klarade "+ result +" frågor av 5.");
} else {
  alert("Slut! Du klarade "+ result +" frågor av 5.");
};


if (input == "Bob Marley") {
  var inputOne = prompt ("Vilket år dog han?");
};

if (inputOne == "1981") {
  result++;
  var inputTwo = prompt ("I vilket land föddes han?");
};

if (inputTwo == "Jamaica") {
  result++;
  var inputThree = prompt ("Vilken låt har texten: 'No bullet can stop us now, we neither beg nor we won't bow'?");
};

if (inputThree == "Jammin'") {
  result++;
  var inputFour = prompt ("Vilket år fick han en stjärna på 'Hollywood Walk of Fame' ?");
};

if (inputFour == "2001") {
  result++;
  var inputFive = prompt ("Vilken religion förknippas med Bob Marley?");
};

if (inputFive == "Rastafari") {
  result++;
  alert("Slut! Du klarade "+ result +" frågor av 5.");
} else {
  alert("Slut! Du klarade "+ result +" frågor av 5.");
};


//UPPGIFT 12
var savings = prompt("Hur mycket vill du spara?" );
var interest = prompt("Vad har du för ränta på besparingen? (Skriv i decimaltal)");
var total = savings - (savings * interest / 100 * 5);
var bank = savings - (savings * 0.02 * 5);
var change1 = bank - total;
var change2 = total - bank;

console.log("Om du hade sparat pengarna på banken så hade du fått " + Math.floor(bank) + " kronor på att sätta in det på banken.");

if (bank > total) {
  console.log("Du fick din besparning på " +savings+ " kronor med årsränta av " +interest+ " procent ihopa resultatet " +total+ " kronor, alltså hade du tjänat " +change1+ " kronor på att sätta in det på banken.");
} else if (total > bank) {
  console.log("Du fick din besparning på " +savings+ " kronor med årsränta av " +interest+ " procent ihopa resultatet " +total+ " kronor, alltså hade du förlorat " +change2+ " kronor på att sätta in det på banken.");
};


//UPPGIFT 13
//Se separat fil "highLowGuesses"


//UPPGIFT 14
var itsWinterTime = true;
itsWinterTime ? console.log('Wear warm clothes!') : console.log('Wear lighter clothes');
