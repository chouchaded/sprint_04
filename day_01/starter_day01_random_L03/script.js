 var d = new Date();
  var jour = d.getDate();
  var mois = d.getMonth() + 1;
  var annee = d.getFullYear();

  if (jour < 10) jour = "0" + jour;
  if (mois < 10) mois = "0" + mois;

  var heures = d.getHours();
  var minutes = d.getMinutes();
  var secondes = d.getSeconds();

  if (heures < 10) heures = "0" + heures;
  if (minutes < 10) minutes = "0" + minutes;
  if (secondes < 10) secondes = "0" + secondes;

  var fullDate =
     annee +
      "-" +
      mois +
      "-" +
      jour +
    "  " +
    heures +
    ":" +
    minutes +
    ":" +
      secondes;
    
console.log(fullDate);