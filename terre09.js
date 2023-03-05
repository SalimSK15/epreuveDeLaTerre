const args = process.argv;

var valeurEntree = parseInt(args[2]);

function siNumerique(argument){
    return /^-?\d+$/.test(argument)
}

if(args.length == 3){
    if(siNumerique(valeurEntree))
        console.log(Math.sqrt(valeurEntree));
    else
        console.log("Erreur");
}
else 
    if( args.length > 3)
        console.log("Trop d'argument !");
    else 
        console.log("peut d'argument !");