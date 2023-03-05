const args = process.argv;

var valeurEntree = args[2];
var heure = "";
var minutes = "";

function heure24(valeurEntree){
    
    if(valeurEntree[2] === ":" && valeurEntree[4] != undefined){
        heure = valeurEntree[0]+valeurEntree[1];
        minutes = valeurEntree[3]+valeurEntree[4]; 
    }else 
        if(valeurEntree[2] === ":" && valeurEntree[4] == undefined){
            heure = valeurEntree[0]+valeurEntree[1];
            minutes = valeurEntree[3]+0; 
        }else
            if(valeurEntree[1] === ":" && valeurEntree[2] != undefined){
                heure = 0+valeurEntree[0];
                if(valeurEntree[3] == undefined)
                    minutes = valeurEntree[2]+0;
                else 
                    minutes = valeurEntree[2]+valeurEntree[3];  
            }else 
                if(valeurEntree[1] === ":" && valeurEntree[3] == undefined){
                    heure = 0+valeurEntree[1];
                    minutes = valeurEntree[2]+0; 
                }
}

if(args.length == 3){
    if(valeurEntree.length > 5)
        console.log("saisir format 24h ex : 00:00");
    else{
        heure24(valeurEntree);
        if(heure > 12 && heure < 24 && minutes < 60 && minutes > -1){
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
}
else 
    if( args.length > 3)
        console.log("Trop d'argument !");
    else 
        console.log("peut d'argument !");