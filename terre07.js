const args = process.argv;

var chaine = args[2];
//console.log(chaine);

//fonction qui return si l'argument saisi est un nombre ou non
function siNumerique(argument){
    return /^-?\d+$/.test(argument)
}

if(args.length == 3){
    if(siNumerique(chaine))
        console.log("Vous avez saisi un nombre au lieu d'une chaine ");
    else console.log(chaine.length);
    
}else 
    if( args.length > 3)
        console.log("Trop d'argument !");
    else 
        console.log("peut d'argument !");