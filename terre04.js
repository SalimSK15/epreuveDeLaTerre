const args = process.argv;

const valeurEntree = args[2];

if(valeurEntree >= 0){
    if(valeurEntree % 2 == 0 )
        console.log("Paire");
    else 
        console.log("Impaire");
}else
    console.log("Tu ne me la mettra pas a l'invers.");
    

    
    


