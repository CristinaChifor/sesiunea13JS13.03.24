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

// Funcții cu parametri si return
//Sunt compuse din cuvantul cheie function urmat de numele funcției urmat de paranteze rotunde intre care definim parametrii funcției (opțional) (param1, param2) urmate de paranteze acolade { } în interiorul cărora scriem liniile de cod ce dorim sa fie executate în momentul apelarii funcției printre care trebuie sa existe și o linie de cod ce returnează o valoare folosind cuvantul cheie return urmat de valoare.

function removeEvenNumbers(arrayToModify2) {
    const newArray2 = [];

    for (const num of arrayToModify2) {
        //console.log(`num: `, num, "result: ", num % 2);
        if(num % 2 > 0) {
            newArray2.push(num);
        }
    }
    return newArray2;
}

const aray1Modified = removeEvenNumbers(aray1);
console.log(`Modified aray1 is: ${aray1Modified}`);

const aray2Modified = removeEvenNumbers(aray2);
console.log(`Modified aray2 is: ${aray2Modified}`);

 const shoppingBasket2 = [];
 const stockProducts2 = [
    {
        name: "Hat",
        price: 22.99,
        stock: 12
    },
    {
        name: "T-shirt",
        price: 30.99,
        stock: 40
    }
 ];

 function moveFromStockToBasket2(productName) {
    for (const product of stockProducts2) {
        if(product.name === productName) {
            shoppingBasket2.push({name: product.name, quantity: 1});
            product.stock -= 1;
        }
    }
 }

 console.log(`Current stock: `, stockProducts2);
 console.log(`Shopping basket: `, shoppingBasket2);

 moveFromStockToBasket2(`Hat`);

 console.log(`Current stock: `, stockProducts2);
 console.log(`Shopping basket: `, shoppingBasket2);



// Functii Anonime
//Sunt funcții ce le definim fără a fi nevoie sa le denumim dar le putem salva în variabile. 
//Folosirea lor va fi posibila prin folosirea variabilei în care este salvată funcția. Aceste funcții, optional, pot avea parametrii si valori de return.

const printHello = function () {
    console.log(`hello`);
};

printHello();

function mapArray(arrayToMap, mappingFunction) {
const newArray2 = [];
for(const element of arrayToMap) {
    let mappingFunctionResult = mappingFunction(element);
    newArray2.push(mappingFunctionResult);
}

    return newArray2;
}

const arrayToMap = [1, 2, 3];
const doubledArray = mapArray(arrayToMap, function(el) {
    return el *2;
}
)

console.log(`arrayToMap: ${arrayToMap}`);
console.log(`doubledArray: ${doubledArray}`);

const doubled2 = arrayToMap.map(function(el) {
    return el *2;
});
console.log(`doubled2: ${doubled2}`);

// Arrow functions (functii sageata) () =>
// Arrow functions sunt adesea folosite pentru a simplifica codul și pentru a oferi o modalitate mai elegantă de a lucra cu funcții anonime.

const sayHello = () => {
    console.log(`Hello`);
};

sayHello();

const sayHelloTo = (personName) => {
    console.log(`Hello ${personName}`);
};

sayHelloTo(`Cristina`);

const getGreeting= (greetedPerson) => {
    return 'Greetings ${greatedPerson}!';
};

let greeting = getGreeting("John");
console.log(greeting);

greeting = getGreeting('Maria');
console.log(greeting);

const doubled3 = arrayToMap.map( (el) => {
    return el *2;
});
console.log(`doubled3: ${doubled3}`);

// const doubled3 = arryToMap (el => el * 2);
