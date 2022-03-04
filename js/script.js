const tellNumbers = parseInt(prompt("Reinserisci i numeri in ordine"));
console.log(tellNumbers);


setTimeout(indovinaNumero, 30000);

let i = 0

while ( i < 5){
    let randomNumbers = Math.floor(Math.random() * (max - min) + min);
    console.log(randomNumbers);
    i++
}


