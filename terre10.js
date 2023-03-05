const args = process.argv;

var valeurEntree = parseInt(args[2]);

function siNumerique(argument){
    return /^-?\d+$/.test(argument)
}
function nombrePremier(val){
    var premier = true;
    if(val == 0 || val == 1)
        premier = false;

    for(i = 2; i < val; i++){
        if(val%i == 0)
            return false;
    }
    return premier;
}
if(args.length == 3){
    if(siNumerique(valeurEntree))
        if(nombrePremier(valeurEntree))
            console.log("Oui, "+valeurEntree+" est un nombre premier.");
        else
            console.log("Non, "+valeurEntree+" n'est pas un nombre premier.");        
    else
        console.log("Erreur");
}
else 
    if( args.length > 3)
        console.log("Trop d'argument !");
    else 
        console.log("peut d'argument !");