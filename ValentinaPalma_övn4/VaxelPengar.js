var cost = prompt("Hur mycket kostar varan?");
var payment = prompt("Hur mycket betalar du med?");
var money = [
    [1, "en"],
    [2, "två"],
    [5, "fem"],
    [10, "tio"],
    [20, "tjugo"],
    [50, "femtio"],
    [100, "etthundra"],
    [200, "tvåhundra"],
    [500, "femhundra"],
    [1000, "tusen"]
  ];
var returnMoney = Math.round(payment - cost);
var change = [];
var vaxel = 0;

function cashier(cost, payment, money) {
  for (i = money.length - 1; i > -1; i--) {
    while (returnMoney >= money[i][0]) {
      returnMoney -= money[i][0];
      vaxel += money[i][0];
      change.push(money[i][1]);
    }
  }
  return change, vaxel;
};

cashier(cost, payment, money);
alert("Du får tillbaka " + vaxel + " kr i form av " + change.join(", ") + ".");
