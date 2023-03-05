const args = process.argv;

var valeurEntree01 =parseInt(args[2]);
var valeurEntree02 = parseInt(args[3]);

if(args.length == 4)
    if((valeurEntree01 >= valeurEntree02) && (valeurEntree02 > 0)){

        var resulat = Math.trunc(valeurEntree01/valeurEntree02);
        var reste = valeurEntree01%valeurEntree02;
        console.log("resulat : "+resulat);
        console.log("reste : "+reste);
    }else
        console.log("Erreur");
else 
    if( args.length > 4)
        console.log("Trop d'argument !");
    else 
        console.log("peut d'argument !");
        

