const args = process.argv;

var valeurEntree = args[2];
var heure = "";
var minutes = "";

function exctractionPM(char1,char2){
    if(char1 == "P" && char2 == "M" || char1 == "P" && char2 == "m" || char1 == "p" && char2 == "M" || char1 == "p" && char2 == "m" )
        return true;
    else
        return false
}
function heure24(valeurEntree){
    
    if(valeurEntree[2] === ":" && valeurEntree[4] != undefined){
        heure = valeurEntree[0]+valeurEntree[1];
        minutes = valeurEntree[3]+valeurEntree[4]; 
    }else 
        if(valeurEntree[2] === ":" && valeurEntree[4] == undefined){
            minutes = valeurEntree[3]+0; 
            heure = valeurEntree[0]+valeurEntree[1];
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
    
    if(!exctractionPM(valeurEntree[5],valeurEntree[6]))
        console.log("saisir format 24h ex : 10:00PM");
    else{
        heure24(valeurEntree);
        if(heure >= 0 && heure < 12 && minutes < 60 && minutes > -1){
            if(heure != 0)
                console.log((parseInt(heure)+12)+":"+minutes);
            else
                console.log(heure+":"+minutes);
                
        }else
            if(heure == "12" && minutes < 60 && minutes > -1)
                console.log(parseInt(heure)-12+":"+minutes+"PM");
            else
                if(heure > 12 && heure <= 23 && minutes < 60 && minutes > -1)
                    console.log(parseInt(heure)+":"+minutes+"PM");
                else
                    console.log("saisir format 12h ex : 01:00PM");   
    }
}
else 
    if( args.length > 3)
        console.log("Trop d'argument !");
    else 
        console.log("peut d'argument !");