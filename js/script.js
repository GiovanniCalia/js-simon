let randomNumber = document.getElementById("numeri-random");
let result = document.getElementById("risultato");
let arrNumbers = [];
let userNumbers = [];
let i = 0

while ( i < 5){
    let randomNumbers = Math.floor(Math.random() * (100 - 1) + 1);
    while (arrNumbers.includes(randomNumbers)){
        randomNumbers = Math.floor(Math.random() * (100 - 1) + 1);
    }
    arrNumbers.push(randomNumbers);
    console.log(randomNumbers);
    const eleNumber = document.createElement("div");
    eleNumber.classList.add("number");
    eleNumber.innerHTML = randomNumbers;
    randomNumber.append(eleNumber);
    i++;
} 

setTimeout(clearNumbers, 2990);

function clearNumbers(){
    randomNumber.style.display = "none";
}

setTimeout(indovinaNumero, 3000);

function indovinaNumero(){
    for (i = 0; i < 5; i++){
        let tellNumbers = parseInt(prompt("Reinserisci i numeri in ordine"));
        console.log(tellNumbers);
        userNumbers.push(tellNumbers);
        
        /*
        if (arrNumbers.includes(tellNumbers)){
            console.log("ottimo!");
            userNumbers.push(tellNumbers)
        } else{
            console.log("non va bene");
        }*/
    }
    if (arrNumbers == userNumbers){
        result.innerHTML = `Hai vinto!`;
    } else {
        result.innerHTML = `Hai perso!`;
    } 
    console.log(arrNumbers);
    console.log(userNumbers);

}






/*
while ( i < 5){
    let randomNumbers = Math.floor(Math.random() * (100 - 1) + 1);
    const eleNumber = document.createElement("div");
    eleNumber.classList.add("number");
    eleNumber.innerHTML = randomNumbers;
    randomNumber.append(eleNumber);
    arrNumbers.push(randomNumbers);
    i++
    console.log(arrNumbers)
}*/