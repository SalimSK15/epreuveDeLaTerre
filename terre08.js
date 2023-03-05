const args = process.argv;

var valeurEntree01 = parseInt(args[2]);
var valeurEntree02 = parseInt(args[3]);

function siNumerique(argument){
    return /^-?\d+$/.test(argument)
}

if(args.length == 4){
    if(siNumerique(valeurEntree01) && siNumerique(valeurEntree02))
        console.log(Math.pow(valeurEntree01,valeurEntree02));
    else
        console.log("Erreur");
}
else 
    if( args.length > 4)
        console.log("Trop d'argument !");
    else 
        console.log("peut d'argument !");