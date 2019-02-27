//UPPGIFT 1
function namedFunction(){
  //KOD
};


//UPPGIFT 2
var anonym = function () {
  //KOD
};


//UPPGIFT 3
(function() {
  //CODE
}());


//UPPGIFT 4
var a = function() {
  alert('Hej');
};


//UPPGIFT 5
var asd = function() {
  console.log(asd);
};


//UPPGIFT 6
var uppgiftSex = (function() {
  alert('När jag blir stor vill jag vara en självkörande bil');
}());


//UPPGIFT 7
function namngivenFunktion() {
  console.log('7. Jag är en namngiven funktion');
};

namngivenFunktion();


//UPPGIFT 8
/*
1 kallas för JS Function Parameters.

2 kallas för JS Function Arguments.
*/


//UPPGIFT 9
function uppgiftNio(a, b) {
  console.log(a + b);
};

uppgiftNio('Detta är uppgift 9. Hej','då');


//UPPGIFT 10
(function uppgiftTio(a, b) {
  console.log(a + b);
})(1, 2);


//UPPGIFT 11
function getRandom(min, max) {
  return Math.floor(Math.random() * ((max+1) - min) + min);
};

console.log(getRandom(1, 10));


//UPPGIFT 12
function anotherRandom(a, b, c, d) {
  var x = Math.floor(Math.random() * b) + a;
  var y = Math.floor(Math.random() * (d - c + 1)) + c;
  var array = [x, y];
  return array[Math.floor(Math.random() * array.length)];
};

console.log(anotherRandom(1, 5, 10, 20));


//UPPGIFT 13
var oddEven = prompt("Skriv en heltal för att ta reda på om det är ett jämt eller ojämt nummer.");

function isItEven(oddEven) {
    if (oddEven % 2 === 0) {
        alert("Talet " + oddEven + " är jämnt.")
    } else {
        alert("Talet " + oddEven + " är ojämnt.")
    }
};

isItEven(oddEven);


//UPPGIFT 14
var name = prompt("Skriv in ditt namn");
var randomName = ["de la Zaragoza", "von Ikeadolittle", "av Pringelsdottirson"];
var generateRandom = randomName[Math.floor(Math.random() * randomName.length)];

function newName(name) {
  alert(name+ " " +generateRandom);
};

newName(name);


//UPPGIFT 15
/* Om funktionen är namngiven och du ger ett argument så skriver den ut resultatet ändå, för den hoistar.
Men i det första exemplet blir det undefined. */
