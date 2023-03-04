const args = process.argv;
const chemainFichier = args[1];

var nomFichier = ""; 
// on recupere le dernier index
var indLettre = chemainFichier.length-1;

// on recupere le 1er index de / 
while (chemainFichier[indLettre] != "/"){
    indLettre -= 1;
}

// on construit le nom du fichier 
for (var i = indLettre+1; i < chemainFichier.length; i++){
    nomFichier = nomFichier + chemainFichier[i];
}
console.log(nomFichier);
