function siNumerique(argument){
    return /^-?\d+$/.test(argument)
}

const args = process.argv;

var i = 2;
var j = 2;
var trie = true;

while(j < args.length){
    if(!siNumerique(args[j])){
        console.log("Erreur detection de(s) lettre(s)");
        break;
    }
    j++;
}
if(j == args.length && args[2] != undefined){
    while( i < args.length-1 && trie == 1){
        if(parseInt(args[i+1]) < parseInt(args[i])){
            trie = false;}  
        i++;
    }
    switch (trie) {
        case true:
            console.log("Triee !");
            break;
        case false:
            console.log("Pas triee !");
            break;
        default:
            console.log("erreur");
            break;
    }  
}else
    console.log("Veuillez saisir une liste numerique svp !");
    

    
