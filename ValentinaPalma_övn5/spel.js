var dragonlife = 10;
var life = 10;
alert("Välkommen till Dragonslayer. Du kommer att få två alternativ där du väljer vad du vill göra.");
alert("Efter din tur är det drakens tur. Lycka till!");

//Sätter igång spelet
while (true) {
    var option = prompt("Oh nej! Vi stöter på en drake! Vad ska vi göra? Skriv in 1 eller 2. \n1. Attackera den \n2. Gömma dig");
    player(option);
    attackOfDragon();

//Funktion beroende spelarens val
  function player(a) {
    if (a == 1) {
      attackOfPlayer();
    } else if (a == 2) {
      playerHiding();
    }
  };

//Om spelaren väljer att attackera, kommer det två random alternativ (miss or hit)
  function attackOfPlayer() {
    var attack = Math.round(Math.random());
    if (attack == 0) {
      alert("Du attackerade draken! Bra jobbat, draken förlorade ett liv!");
      dragonlife--;
    } else if (attack == 1) {
      alert("OOPS... Gick inte som planerat... Du missade draken.");
    }
    alert("Draken har nu " + dragonlife + " liv kvar. Du har " +life+ " liv kvar.");
  };

//Om spelaren väljer att gömma sig. Finns två random alternativ, antingen lyckas spelaren eller draken
  function playerHiding() {
    let hide = Math.round(Math.random());
    if (hide == 0) {
      alert("YESSS! Du gömde dig och draken halkade och förlorade 2 liv.");
      dragonlife -= 2;
    } else if (hide == 1) {
      alert("Åh nej!! Draken hittade dig och attackerade. Du förlorade 2 liv.");
      life -= 2;
    }
    alert("Draken har nu " + dragonlife + " liv kvar. Du har " +life+ " liv kvar.");
  };

//Drakens attacker. Antingen fullträff eller miss. Random funktion.
  function attackOfDragon() {
    var dragon = Math.round(Math.random());
    if (dragon == 0) {
      alert("Draken attackerade dig! Du förlorade 1 liv.");
      life--;
    } else if (dragon == 1) {
      alert("Phew! Draken attackerade dig men missade. Vilken tur!");
    }
    alert("Draken har nu " + dragonlife + " liv kvar. Du har " +life+ " liv kvar.");
  };

//När spelet är slut, beroende på vem som vinner. Resterande liv skrivs ut
  if (life <= 0) {
    alert("Rest in peace. \nDraken dödade dig.");
    alert("Du förlorade alla dina liv. Draken har " +dragonlife+ " liv kvar. Oj så nära du var!")
    alert("THE END. \nStäng ner rutan")
  } else if (dragonlife <= 0) {
    alert("HURRA!!! Grattis! Du vann mot draken.");
    alert("Draken förlorade alla sina liv. Du har kvar " +life+ " liv. Vilket äventyr. Nu kan du njuta av livet!")
    alert("THE END \nStäng ner rutan.");
  };
};
