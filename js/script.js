// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

//Definizione variabili 
let km = 0;
let eta = 0;
const euro_1Km = 0.21;
const saleMinor = 0.2;
const saleOver65 = 0.4;
let price = 0;

//Assegnazioni variabili


if (isNaN(km) || isNaN(eta)){
    document.getElementById('my-title').innerHTML = 'Ricarica la pagina e inserisci i dati nel formato corretto per conoscere il prezzo del biglietto';
}else{
    price = euro_1Km * km;
    if (eta < 18){
        price *= (1 - saleMinor);
    } else if (eta > 65){
        price *= (1 - saleOver65);
    }
    price = price.toFixed(2);
    document.getElementById('my-price').innerHTML = price + ' &euro;';
}

