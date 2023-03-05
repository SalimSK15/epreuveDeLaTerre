const args = process.argv;

var valeurEntree = args[2];
var heure = valeurEntree[0]+valeurEntree[1];
var minutes = valeurEntree[3]+valeurEntree[4];


if(args.length == 3){
    if(valeurEntree[2] === ":" && heure > 12 && heure < 24 && minutes < 60 && minutes > -1){
        console.log(heure-12+":"+minutes+"PM");
        
    }else
        if(heure == "00" && minutes < 60 && minutes > -1)
            console.log(parseInt(heure)+12+":"+minutes+"PM");
        else
            if(heure > 0 && heure <= 12 && minutes < 60 && minutes > -1)
                console.log(parseInt(heure)+":"+minutes+"AM");
            else
                console.log("saisir format 24h ex : 00:00");
}
else 
    if( args.length > 3)
        console.log("Trop d'argument !");
    else 
        console.log("peut d'argument !");