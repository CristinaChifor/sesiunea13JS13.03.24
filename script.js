//console.log(`Hello`);

// Functii
// Funcțiile reprezintă blocuri de cod reutilizabile, definite pentru a efectua anumite acțiuni. Funcțiile sunt un aspect fundamental în JavaScript și sunt folosite pentru structurarea, eficientizarea și organizarea codului.
//Funcțiile pot fi executa operații în baza unor parametri (date de intrare) și pot returna (întoarce) o valoare în urma execuției (date de ieșire).

// Functii simple
// Funcțiile simple sunt compuse din cuvantul cheie function urmat de numele funcției urmat de paranteze rotunde () urmate de paranteze acolade { } în interiorul cărora scriem liniile de cod ce dorim sa fie executate în momentul apelarii funcției.

function printDigits() {
    for (let i = 0; i <= 9; i++) {
        console.log(`digit: `, i);
    }
   
}
printDigits();
//printDigits();
//printDigits();

// Funcții cu parametrii
// Definirea funcțiilor cu parametrii:
//Sunt compuse din cuvantul cheie function urmat de numele funcției urmat de paranteze rotunde intre care definim parametrii funcției (param1, param2) urmate de paranteze acolade { } în interiorul cărora scriem liniile de cod ce dorim sa fie executate în momentul apelarii funcției.

// Apelarea funcțiilor cu parametri:
// Se realizeaza prin folosirea numelui funcției unde dorim sa se execute blocul de cod urmat de parantezele rotunde intre care trecem valori reale pentru parametri - aceste valori se numesc argumente. 

//function arrayHasElement(arrayToCheck, element) {
    //let found = false;
//for (const elem of arrayToCheck) {
    //if (elem === element) {
        // found= true;
       // break;
    //}
//}
//if (found) {
    //console.log(`Array ${arrayToCheck} has element ${element}`);
//} else {
    //console.log(`Array ${arrayToCheck} does not element ${element}`);
//}

//}

 const array1 = [1, 2, 3, 4, 5];
 const array2 = [3, 10, 21];
 //const valueToCheck1 = 10;
 //const valueToCheck2 = 30;

 //arrayToCheck(array1, valueToCheck1);
 //arrayToCheck(array2, valueToCheck1);
 //arrayToCheck(array1, valueToCheck2);
//arrayToCheck(['ala', 'bala', 'portocala'], 'ala');

// Funcții cu return

function removeEvenNumber(arrayToModify) {
    const newArray = [];

    for (const num of arrayToModify) {
        if(num % 2 > 0) {
            newArray.push(num);
        }

    }
    return newArray;
}

const array1Modified = removeEvenNumber(array1);
console.log(`modified array1 is:  ${array1Modified}`);

const array2Modified = removeEvenNumber(array2);
console.log(`modified array2 is:  ${array2Modified}`);

