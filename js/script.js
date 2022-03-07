let randomNumber = document.getElementById("numeri-random");
let result = document.getElementById("risultato");
let arrNumbers = [];
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
    let exactNumbers = [];
    for (let i = 0; i < 5; i++){
        let tellNumbers;
        do{
            tellNumbers = parseInt(prompt("Reinserisci i numeri in ordine"));
            if (exactNumbers.includes(tellNumbers)){
                prompt("Numero già esistente, inseriscine un altro")
            }
        } while (exactNumbers.includes(tellNumbers));

        exactNumbers.push(tellNumbers);
    }

    let numeriIndovinati = [];

    for (let i = 0; i < 5; i++){
       if (arrNumbers[i] == exactNumbers[i]){
        numeriIndovinati.push(exactNumbers[i]);
        }
    }

    result.innerHTML = (`Hai indovinato questi numeri: ${numeriIndovinati}, in totale sono ${numeriIndovinati.length}.`);
}


