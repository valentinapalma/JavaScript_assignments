// UPPGIFT 1
var colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
console.log(colors);


// UPPGIFT 2
var numbers = "3, 6, 9";
console.log(numbers[0]);


// UPPGIFT 3
var myArray = [];
myArray.push(Math.floor(Math.random() * 20));
myArray.push(Math.floor(Math.random() * 20));
myArray.push(Math.floor(Math.random() * 20));
myArray.push(Math.floor(Math.random() * 20));
myArray.push(Math.floor(Math.random() * 20));
console.log(myArray);


// UPPGIFT 4
var employersOne = ["Karl", "Mia", "Veronica", "Sigfrid", "Fredrik"];
var employersTwo = ["Stephanie", "Olof", "Christopher", "Erika", "Sofia"];
var companame = employersOne.concat(employersTwo);
console.log(companame);


// UPPGIFT 5
var animals = ["Tiger", "Björn", "Giraff", "Panda", "Elefant", "Varg", "Hund", "Ödla", "Dikdik", "Zebra"];
var changeAnimal = prompt("Skriv vilket av följande djur som ska ändras \n" + animals);
var change = (animals.indexOf(changeAnimal));
var addAnimal = prompt("Skriv ett djur du vill lägga till.");

animals.splice(change, 1, addAnimal);

alert(animals);


//UPPGIFT 6
var animalsTwo = ["Tiger", "Björn", "Giraff", "Panda", "Elefant", "Varg", "Hund", "Ödla", "Dikdik", "Zebra"];
var randomAnimal = animalsTwo[Math.floor(Math.random() * animalsTwo.length)];

while (true) {
  var guessAnimal = prompt("Gissa på ett djur " +animalsTwo);

  if (guessAnimal == randomAnimal) {
    alert("Grattis! Du vann!");
    break;
  } else {
    alert("Fel! Försök igen.");
  }
};


//UPPGIFT 7
var text = ['t', 't', 'ä', 'l', ' ', 'r', 'a', 'v', ' ', 'a', 't', 't', 'e', 'D'];
console.log(text.reverse());


//UPPGIFT 8
var shoppinglista = [];
var boughtItems = [];
var remove;
var i = 0;
var numberOfItems = 0;

while (1 == 1) {
  shoppinglista = prompt("Skriv in 5 saker du vill lägga till i din shoppinglista. Separera sakerna med mellanslag.").split(" ");
  alert("Dags att gå till affären! Du har följande saker i din shoppinglista: " +shoppinglista);

  while (i <= 4 ) {
    var item = prompt("Skriv in det du handlar för att bocka av din lista");
    if (shoppinglista.includes(item)) {
      remove = shoppinglista.lastIndexOf(item);
      shoppinglista.splice(remove, 1);
      numberOfItems++;
      i++;
    } else {
      boughtItems.push(item);
      i++;
    }
  };

    if (numberOfItems == 5) {
      alert("Du har fått med dig allt från din lista!");
      break
    } else if (numberOfItems < 5 && numberOfItems > 0) {
      alert("Du fick med dig " +boughtItems+ " men glömde " +shoppinglista)
      break
    } else if (numberOfItems == 0) {
      alert("Oj! Du har inte handlat något från din lista, men du fick med dig " +boughtItems)
      break
    } else {
      alert("Något blev fel. Försök igen.");
      continue
    }
};


//UPPGIFT 9
var raceCars = ["Volvo", "Mercedes", "Ford", "BMW", "Audi"];

for (i = 0; i < 4; i++) {
  randomCar = Math.floor(Math.random() * raceCars.length);
  raceCars.splice(randomCar, 1);
};

alert("Vinnaren är " +raceCars[0]);


//UPPGIFT 10
/* spread operator använder ... som syntax och det den gör är att den tar en array
eller ett objekt och sätter ihop med annat. detta för att underlätta skrivandet. T.ex.

UTAN ...
var mid = [3, 4];
var num = [1, 2, mid, 5, 6];

console.log(num) kommer att skriva ut det som [1, 2, [3, 4], 5, 6]
Alltså en array i en array.

MEN MED ...
var mid = [3, 4];
var num = [1, 2, ...mid, 5, 6];

console.log(num) kommer istället då skriva ut [1, 2, 3, 4, 5, 6] så att det ser
ut som endast en array, för dem har istället sats ihop.

*/


//UPPGIFT 11
var arr = [1,2,3,4,5,123,4,5,3,4,5,6,7,3,4,5,6,7];
console.log(arr.length);

//Ja, längden blir den samma.


//UPPGIFT 12
var sortNumbers = [40, 2, 16, 25, 98];
sortNumbers = sortNumbers.sort(function (a, b) {
  return a - b;
});
console.log(sortNumbers);


//UPPGIFT 13
var expectedPay = prompt("Hur mycket vill du få i lön?");
var offeredPay = [18000, 22000, 25000, 28000, 30000];
var difference = offeredPay[2] - expectedPay;

if (expectedPay < offeredPay[2]) {
  alert("Du får " +difference+ " kronor mindre än medianlönen som ligger på " +offeredPay[2]+ ".");
} else if (expectedPay > offeredPay[2]) {
  alert("Du får " + Math.abs(difference) + " kronor mer än medianlönen som ligger på " +offeredPay[2]+ ".");
} else {
  alert("Det får lika mycket som medianlönen, alltså " +offeredPay[2]+ ".");
};


//UPPGIFT 14
var firstQuestion = prompt("Skriv någon som under de senaste åren vunnit nobelpriset i litteratur.");
var secondQuestion = prompt("Nämn en spelkonsol.")
var thirdQuestion = prompt("Skriv namnet på en vinnare av Rupaul's Drag Race")

var nobelPris = ["Bob Dylan", "Alice Munro", "Kazuo Ichiguro"];
var konsol = ["XBOX", "Playstation", "Nintendo"];
var rpdr = ["Bianca Del Rio", "Aquaria", "Sharon Needles"];

var score = 0;

if (nobelPris.includes(firstQuestion)) {
  score++;
};

if (konsol.includes(secondQuestion)) {
  score++;
};

if (rpdr.includes(thirdQuestion)) {
  score++
};

alert("Du fick svarade med " +firstQuestion+ ", " +secondQuestion+ ", " +thirdQuestion+ " och fick " +score+ " poäng av 3 möjliga poäng.");


//UPPGIFT 15
//Se separat fil "VaxelPengar.js"
