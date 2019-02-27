//UPPGIFT 1
var para = document.body.innerHTML += "<p>Uppgift 1</p>";


//UPPGIFT 2
var para1 = document.createElement("p");
document.body.appendChild(para1)
para1.textContent = "Uppgift 2";
document.body.insertBefore(para1, document.querySelector("p"));


//UPPGIFT 3
var uppgiftTre = document.createElement("div");
uppgiftTre.textContent = "Uppgift 3 - Click";
uppgiftTre.setAttribute("class", "uppgiftTre");
document.body.appendChild(uppgiftTre);
document.querySelector(".uppgiftTre").addEventListener("click", function() {
  console.log("Hejsan")
});


//UPPGIFT 4
document.querySelector(".galaxy").addEventListener("mouseover", function() {
  var uppgiftFyra = document.createElement("p");
  uppgiftFyra.setAttribute("class", "uppgiftFyra");
  uppgiftFyra.textContent = "Uppgift 4 - Vad duktig du är!";
  document.body.appendChild(uppgiftFyra);
});


//UPPGIFT 5
var uppgiftFem = document.createElement("p");
uppgiftFem.setAttribute("class", "coordinators");
document.body.appendChild(uppgiftFem);
window.addEventListener("mousemove", cordinations);

function cordinations(event) {
  var x = event.clientX;
  var y = event.clientY;
  document.querySelector(".coordinators").textContent = "Uppgift 5 - X coordinate: " +x+ " Y cordinate: " +y;
};


//UPPGIFT 6
document.body.style.backgroundColor = "PaleVioletRed";


//UPPGIFT 7
var a = document.querySelector("body");
var style = window.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle;

console.log(style);


//UPPGIFT 8
window.addEventListener("click", function() {
  var uppgiftAtta = document.createElement("div");
  uppgiftAtta.setAttribute("class", "uppgift8");
  document.body.appendChild(uppgiftAtta);
  uppgiftAtta.textContent = ("Uppgift 8 - Click!");
});


//UPPGIFT 9
var divOne = document.createElement("div");
divOne.setAttribute("class", "divOne");
divOne.textContent = ("Uppgift 9 - Klicka på mig för att ändra färg!");
document.body.appendChild(divOne);

var divTwo = document.createElement("div");
divTwo.setAttribute("class", "divTwo");
divTwo.textContent = ("Uppgift 9 - Hovra över mig för att ändra färg!");
document.body.appendChild(divTwo);

var divThree = document.createElement("div");
divThree.setAttribute("class", "divThree");
divThree.textContent = ("Uppgift 9 - Hovra över!");
document.body.appendChild(divThree);

document.querySelector(".divOne").addEventListener("click", function() {
  document.querySelector(".divOne").style.backgroundColor = "Aquamarine";
});

document.querySelector(".divTwo").addEventListener("mouseover", function() {
  document.querySelector(".divTwo").style.backgroundColor = "DarkSalmon";
});

document.querySelector(".divThree").addEventListener("mouseleave", function() {
  document.querySelector(".divThree").style.backgroundColor = "FloralWhite";
});


//UPPGIFT 10
document.addEventListener("keypress", function() {
  var uppgiftTio = document.createElement("p");
  uppgiftTio.setAttribute("class", "uppgitTio");
  uppgiftTio.textContent = "Uppgift 10 - SLUTA!";
  document.body.appendChild(uppgiftTio);
  window.setTimeout(function() {
    uppgiftTio.remove();
  }, 2000);
});


//UPPGIFT 11
var click = 0;
var uppgiftElva = document.createElement("div");
uppgiftElva.setAttribute("class", "uppgift11");
uppgiftElva.textContent = "Uppgift 11 - Klicka 5 gånger";
document.body.appendChild(uppgiftElva);

document.querySelector(".uppgift11").addEventListener("click", function remove() {
  click++;
  console.log(click);

  if (click == 5) {
    document.querySelector(".uppgift11").removeEventListener("click", remove);
  }
});


//UPPGIFT 12
document.body.addEventListener("click", function() {
  var uppgiftTolv = document.createElement("div");
  uppgiftTolv.setAttribute("class", "uppgift12");
  uppgiftTolv.textContent = "Uppgift 12";
  document.body.appendChild(uppgiftTolv)
  window.setTimeout(function() {
    uppgiftTolv.remove();
  }, 1000)
})


//UPPGIFT 13
var uppgiftTretton = document.createElement("div");
uppgiftTretton.setAttribute("class", "uppgift13");
uppgiftTretton.textContent = "Uppgift 13 - Dubbelklicka!";
document.body.appendChild(uppgiftTretton);

document.querySelector(".uppgift13").addEventListener("dblclick", function() {
  document.querySelector(".uppgift13").textContent = "Yay! It worked.";
});


//UPPGIFT 14
/*
A) När det sker ett event börjar den först köra elementen som är nestade inne i koden, för att sedan sprida sig "uppåt/utåt", och kör alltså vidare till föräldern osv.

B) Polyfill är en bit kod som används för att förse moderna funktioner i äldre webbläsare som inte vanligtsvis kan läsa av/stödjer koden.
Man kan alltså använda sig av polyfill.io för att lösa det problemet.
*/


//UPPGIFT 15
var a = document.createElement("div");
var b = document.createElement("div");
var c = document.createElement("div");

document.body.appendChild(a);
a.appendChild(b);
b.appendChild(c);

a.setAttribute("class", "uppgift15-one");
b.setAttribute("class", "uppgift15-two");
c.setAttribute("class", "uppgift15-three");

document.querySelector(".uppgift15-one").addEventListener("click", function() {
  document.querySelector(".uppgift15-one").style.backgroundColor = "white";
});

document.querySelector(".uppgift15-two").addEventListener("click", function() {
  document.querySelector(".uppgift15-two").style.backgroundColor = "gray";
});

document.querySelector(".uppgift15-three").addEventListener("click", function() {
  document.querySelector(".uppgift15-three").style.backgroundColor = "black";
  event.stopPropagation();
});


//UPPGIFT 16
var d = document.createElement("div");
var e = document.createElement("div");
var f = document.createElement("div");

document.body.appendChild(d);
d.appendChild(e);
e.appendChild(f);

d.setAttribute("class", "uppgift16-one");
e.setAttribute("class", "uppgift16-two");
f.setAttribute("class", "uppgift16-three");

document.querySelector(".uppgift16-one").addEventListener("click", function() {
  document.querySelector(".uppgift16-one").style.backgroundColor = "white";
}, true);

document.querySelector(".uppgift16-two").addEventListener("click", function() {
  document.querySelector(".uppgift16-two").style.backgroundColor = "gray";
}, true);

document.querySelector(".uppgift16-three").addEventListener("click", function() {
  document.querySelector(".uppgift16-three").style.backgroundColor = "black";
}, true);


//UPPGIFT 17
var uppgift17 = document.createElement("div");
uppgift17.setAttribute("class", "uppgift17");
uppgift17.textContent = "Uppgift 17";
document.body.appendChild(uppgift17);

document.querySelector(".uppgift17").addEventListener("click", function(){
  console.log(event.currentTarget);
  console.log(event.target);
});
