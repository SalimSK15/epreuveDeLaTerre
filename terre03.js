const args = process.argv;

// on recupere lindice du la lettre donnee
var indcDebut = args[2].charCodeAt();

if(indcDebut < 122 && indcDebut >= 97){
    var alphabet = "";
    for (var i = indcDebut; i < 122; i++ ){
        alphabet = alphabet + String.fromCharCode(i);
    }
    console.log(alphabet); 
}

