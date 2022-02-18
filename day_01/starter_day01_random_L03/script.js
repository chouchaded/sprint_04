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

// 


// const mois = String(window.prompt("Veuillez saisir un mois de l'année:"));
// if (mois == "janvier" || mois== "mars" || mois=="mai" || mois=="juillet" ||mois=="septembre")


const mois1 =Number(window.prompt("Veuillez saisir un mois de l'année en chiffre 0=janvier 11=decembre:"));
const annee1 = Number(window.prompt("Veuillez saisir une année en chiffre :"));

	var nbreJour = 0;
	
	if (mois1 <= 6)
	{
		      if (mois%2 == 0)
		    {
			nbreJour = 31;
		}
		else
		{
			nbreJour = 30;
		}
	}
	
	else
	{
		if (mois1%2 == 1)
		{
			nbreJour = 30;
		}
		else
		{
			nbreJour = 31;
		}
	}
	if (mois1 == 1)
	{
		if(annee1%4==0)
{
 	if(annee1%100==0)
  	{
    	if(annee1%400==0)
     	{
     		nbreJour = 29;
     	}
     	else
     	{
      		nbreJour = 28;
     	}

  	}
    else
    {
   		nbreJour = 29;
  	}
}
else
{
 	nbreJour = 28;
}

	}
	
console.log(nbreJour)
  

nbrJrs = new Date(annee, mois , 0).getDate();
console.log(nbrJrs);
