//let randomNumbers = document.getElementById("numeri-random");
setTimeout(indovinaNumero, 3000);
let arrNumbers = []


let i = 0

while ( i < 5){
    randomNumbers = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(randomNumbers);
    arrNumbers.push(randomNumbers);
    i++
}

function indovinaNumero(){
    for (i = 0; i < 5; i++){
        const tellNumbers = parseInt(prompt("Reinserisci i numeri in ordine"));
        console.log(tellNumbers);

        if (arrNumbers.includes(tellNumbers)){
            console.log("ottimo!");
        } else{
            console.log("non va bene");
        }
    }   
}







