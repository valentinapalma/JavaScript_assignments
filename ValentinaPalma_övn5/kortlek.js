var spader = ["Spader Två", "Spader Tre", "Spader Fyra", "Spader Fem", "Spader Sex", "Spader Sju", "Spader Åtta", "Spader Nio", "Spader Tio", "Spader Knekt", "Spader Dam", "Spader Kung", "Spader Ess"];
var hjarter = ["Hjärter Två", "Hjärter Tre", "Hjärter Fyra", "Hjärter Fem", "Hjärter Sex", "Hjärter Sju", "Hjärter Åtta", "Hjärter Nio", "Hjärter Tio", "Hjärter Knekt", "Hjärter Dam", "Hjärter Kung", "Hjärter Ess"];
var klover = ["Klöver Två", "Klöver Tre", "Klöver Fyra", "Klöver Fem", "Klöver Sex", "Klöver Sju", "Klöver Åtta", "Klöver Nio", "Klöver Tio", "Klöver Knekt", "Klöver Dam", "Klöver Kung", "Klöver Ess"];
var diamant = ["Ruter Två", "Ruter Tre", "Ruter Fyra", "Ruter Fem", "Ruter Sex", "Ruter Sju", "Ruter Åtta", "Ruter Nio", "Ruter Tio", "Ruter Knekt", "Ruter Dam", "Ruter Kung", "Ruter Ess"];
var a = 0;
var kortlek = spader.concat(hjarter, klover, diamant);

(function() {
  kortlek.sort(function() {
    return 0.5 - Math.random();
  });
})();

(function deal() {
  if (a < 52) {
    alert(kortlek[a]);
    a++;
    deal();
  }
})();
