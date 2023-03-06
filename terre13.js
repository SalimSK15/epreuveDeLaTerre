function siNumerique(argument){
    return /^-?\d+$/.test(argument)
}
function maximum(val1,val2){
    if(val1 > val2)
        return val1;
    return val2;
}
function minimum(val1,val2){
    if(val1 < val2)
        return val1;
    return val2;
}
function valeurMoyenne(val1,val2,val3){
var val = maximum(val1,val2);
return minimum(val,val3);

}
const args = process.argv;

var valeurEntree01 = parseInt(args[2]);
var valeurEntree02 = parseInt(args[3]);
var valeurEntree03 = parseInt(args[4]);

if(args.length == 5){
    if(!siNumerique(valeurEntree01) || !siNumerique(valeurEntree02) || !siNumerique(valeurEntree03))
        console.log("Vous avez saisi un nombre au lieu d'une chaine ");
    else 
        console.log(valeurMoyenne(valeurEntree01,valeurEntree02,valeurEntree03));
}else 
    if(args.length > 5)
        console.log("Trop d'argument !");
    else 
        console.log("peut d'argument !");
