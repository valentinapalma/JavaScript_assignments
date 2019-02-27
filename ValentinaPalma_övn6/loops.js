//UPPGIFT 1
/*
for (statement 1; statement 2; statement 3) {
   KOD
}
Ett exempel på detta är att man har en array och for loopen går igenom hela
arrayen.
var array = ["a", "b", "c", "d", "f"];
for (i = 0; i < array.length; i++) {
  console.log("Skriver ut loggen 5 gånger, eftersom arrayen innehåller 5 värden");
}
*/


//UPPGIFT 2
/* for... in används för att gå igenom egenskaperna i ett objekt.
for (variable in object) {
  KOD
}
*/


//UPPGIFT 3
/* while loop går igenom koden så länge som villkoret(condition) är sant
while (condition) {
  KOD
}
*/


//UPPGIFT 4
/* do/while loopen utförs alltid minst en gång, även om villkoret(condition) inte är sant.
do {
  KOD
}
while (condition);
*/


//UPPGIFT 5
var x = 1;
var random = Math.floor(Math.random() * 1000) +1;

while (x < 1001) {
  console.log(x);
  x++;
  if (random == 44) {
    break;
  }
};


//UPPGIFT 6
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
};


//UPPGIFT 7
var anotherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

for (var i = 0; i < anotherArray.length; i++) {
  total += anotherArray[i];
};

console.log(total);


//UPPGIFT 8
var arr = ["Nils", "Persson", "Jan", "Svensson", "Karl", "Karlsson", "Per", "Pettersson", "Sam", "Nodesson", "Tim", "Berners-Lee"];
var efternamn = [];

for (var i = 1; i < arr.length; i += 2) {
  efternamn.push(arr[i]);
};

console.log(efternamn);


//UPPGIFT 9
var rader = 5;

for (i = 0; i < rader; i++) {
  var star = "";
  for (l = 0; l <= i; l++) {
    star += "* ";
  }
  console.log(star);
};


//UPPGIFT 10
var sum = 0;

for (i = 0; i <= 10; i++) {
  var multiply = sum * 5;
  sum++;
  console.log(multiply);
};


//UPPGIFT 11
var uppgiftElva = ["Nisse", "Inger", " ", "Andreas", "Ricky", " ", "Greger", "Robin", "Yngva", "Mohsen", "Martin", "Adrian"];

for (i = 0; i < uppgiftElva.length; i++) {
  console.log(uppgiftElva[i].charAt(0));
};


//UPPGIFT 12
console.log("UPPGIFT 12");
var uppgiftTolv = [1, 2, 3, 4, 5];

for (var i in uppgiftTolv) {
  console.log(i);
};


//UPPGIFT 13
var bullet = Math.floor(Math.random() * 5) + 1;
var person = 1;

for (i = 0; i < 6; i++) {
  if (i % 2 === 0) {
    person = "Scarlet";
  } else {
    person = "Johnny";
  }
  alert(person+ " tar upp pistolen mot huvudet och trycker på avtryckaren...");
  if (i == bullet) {
    alert("PANG! Rest in peace, " +person+ ".");
    break;
  } else {
    alert("NO BULLET! Phew...");
  }
};

//UPPGIFT 14
var hats = ["Blue hat", "Green hat", "Red hat", "Blue hat", "Blue hat"];
var blueHats = [];
var greenHats = [];
var redHats = [];

function sortHats() {
  for (i = 0; i < hats.length; i++) {
    var hattar = hats[i];
    switch (hattar) {
      case "Blue hat":
        blueHats.push(hats[i]);
        break;
      case "Green hat":
        greenHats.push(hats[i]);
        break;
      case "Red hat":
        redHats.push(hats[i]);
        break;
    }
  }
};

sortHats();

console.log(blueHats);
console.log(greenHats);
console.log(redHats);
