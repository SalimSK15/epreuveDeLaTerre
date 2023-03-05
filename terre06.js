const args = process.argv;

var chaine = args[2];
//console.log(chaine);

if(args.length == 3){
    var tailleChaine = chaine.length;
    var chaineInverse = "";
   for(var i = tailleChaine-1; i >= 0; i--){
        chaineInverse = chaineInverse + chaine[i];
    }   
    console.log(chaineInverse); 
}else 
    if( args.length > 3)
        console.log("Trop d'argument !");
    else 
        console.log("peut d'argument !");