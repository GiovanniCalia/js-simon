let randomNumber = document.getElementById("numeri-random");
setTimeout(indovinaNumero, 3000);
let arrNumbers = [];
let userNumbers = [];


let i = 0

while ( i < 5){
    let randomNumbers = Math.floor(Math.random() * (100 - 1) + 1);
    const eleNumber = document.createElement("div");
    eleNumber.classList.add("number");
    eleNumber.innerHTML = randomNumbers;
    randomNumber.append(eleNumber);
    arrNumbers.push(randomNumbers);
    i++
    console.log(arrNumbers)
}

function indovinaNumero(){
    for (i = 0; i < 5; i++){
        const tellNumbers = parseInt(prompt("Reinserisci i numeri in ordine"));
        console.log(tellNumbers);

        if (arrNumbers.includes(tellNumbers)){
            console.log("ottimo!");
            userNumbers.push(tellNumbers)
        } else{
            console.log("non va bene");
        }
        //console.log(userNumbers) 
    }
    if (arrNumbers = userNumbers){
        console.log("Hai vinto!");
    } else {
        console.log("Hai perso!");
    } 
    console.log(arrNumbers)
    console.log(userNumbers)
}








