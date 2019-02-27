//UPPGIFT 13
var random = Math.floor(Math.random() *100 + 1);
var guess1, guess2, guess3, guess4, guess5;

guess1 = prompt("Gissa på en siffra mellan 1 - 100. Du får fem försök. Lycka till!");

if (random == guess1) {
  alert("Woho! Du gissade rätt! Talet var " +random);
} else if (random > guess1) {
  guess2 =  prompt("Du gissade: " +guess1+ ". \nLedtråd: Högre");
} else if (random < guess1) {
  guess2 = prompt("Du gissade: " +guess1+ ". \nLedtråd: Lägre");
};

if (random == guess2) {
  alert("Woho! Du gissade rätt! Talet var " +random);
} else if (random > guess2) {
  guess3 =  prompt("Du gissade: " +guess2+ ". \nLedtråd: Högre");
} else if (random < guess2) {
  guess3 = prompt("Du gissade: " +guess2+ ". \nLedtråd: Lägre");
};

if (random == guess3) {
  alert("Woho! Du gissade rätt! Talet var " +random);
} else if (random > guess3){
guess4 =  prompt("Du gissade: " +guess3+ ". \nLedtråd: Högre");
} else if (random < guess3){
guess4 = prompt("Du gissade: " +guess3+ ". \nLedtråd: Lägre");
};

if (random == guess4) {
  alert("Woho! Du gissade rätt! Talet var " +random);
} else if (random > guess4){
guess5 =  prompt("Du gissade: " +guess4+ ". \nLedtråd: Högre");
} else if (random < guess4){
guess5 = prompt("Du gissade: " +guess4+ ". \nLedtråd: Lägre");
};

if (random == guess5) {
  alert("Woho! Du gissade rätt på sista försöket! Talet var " +random);
} else if (random > guess5){
  alert("Du gissade tyvärr inte i tid. Bättre lycka nästa gång! Talet var: " +random);
} else if (random < guess5){
  alert("Du gissade tyvärr inte i tid. Bättre lycka nästa gång! Talet var: " +random);
};
