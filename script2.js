console.log(`Hello`);


// Funcțiile sunt un aspect fundamental în JavaScript și sunt folosite pentru structurarea, eficientizarea și organizarea codului.
//Funcțiile pot fi executa operații în baza unor parametri (date de intrare) și pot returna (întoarce) o valoare în urma execuției (date de ieșire).

// Functii simple 
//Funcțiile simple sunt compuse din cuvantul cheie function urmat de numele funcției urmat de paranteze rotunde () urmate de paranteze acolade { } în interiorul cărora scriem liniile de cod ce dorim sa fie executate în momentul apelarii funcției.

function printDigits(){
    for (let i =0; i <= 9; i++) {
        console.log(`digit: `, i);
    }
}

printDigits();// apelam functia
printDigits();
printDigits();

// Functii cu parametri
// Sunt compuse din cuvantul cheie function urmat de numele funcției urmat de paranteze rotunde intre care definim parametrii funcției (param1, param2) urmate de paranteze acolade { } în interiorul cărora scriem liniile de cod ce dorim sa fie executate în momentul apelarii funcției.

function arrayHasElement3(arrayToCheck2, element) {
    let found = false;
    for(const elem of arrayToCheck2) {
        if(elem === element) {
            found = true;
            break;
        }
      }
    if(found) {
        console.log(`Array ${arrayToCheck2} has element ${element}`);
    } else {
        console.log(`Array ${arrayToCheck2} does not have element ${element}`);
    }
}
const aray1 = [1, 2, 3, 4, 5];
const aray2 = [3, 10, 21];
const valueToCheck3 = 10;
const valueToCheck4 = 30;

arrayHasElement3(aray1, valueToCheck3);
arrayHasElement3(aray2, valueToCheck3);
arrayHasElement3(aray2, valueToCheck4);
arrayHasElement3(['ala','bala','portocala'], 'ala');