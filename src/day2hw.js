//checks if the number is prime and adds it to the given array
function checkPrime(c, primeNums = [], noPrimeNums = []) {
    for (let y = 2; y <= c; y++) {
        if (c == 2) {
            primeNums.push(2)
        } else if (c == y + 1) {
            primeNums.push(c)
            break
        } else if (c % y == 0) {
            noPrimeNums.push(c)
            break
        }
    }
}



//finds the sum of the number's dividers and returns it
function sumOfDividers(k) {
    let sumOfDividersOfK = 0;
    for (let i = 1; i < k; i++) {
        if (k % i == 0) {
            sumOfDividersOfK += i
        }
    }
    return sumOfDividersOfK;
}



//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )
function isNumbersPrime(...sentNumbersArray) {
    let primeArray = [];
    let notPrimeArray = [];

    for (let i = 0; i < sentNumbersArray.length; i++) {
        checkPrime(sentNumbersArray[i], primeArray, notPrimeArray)
    }

    console.log("Array of prime numbers:" + primeArray)
    console.log("Array on NON prime numbers:" + notPrimeArray)
}
isNumbersPrime(3, 5, 6, 11, 16)



//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
function isAmicable(x, y) {
    let dividersOfX = sumOfDividers(x);
    let dividersOfY = sumOfDividers(y);

    if (dividersOfX == y && dividersOfY == x) {
        console.log(x + " " + y + " are amicable numbers.")
    } else {
        console.log(x + " " + y + " are NOT amicable numbers.")
    }

}
isAmicable(220, 284)



//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
function isPerfect(m) {
    let dividersOfM = sumOfDividers(m);

    if (dividersOfM == m) {
        console.log(m + " is a perfect number.")
    } else {
        console.log(m + " is NOT a perfect number.")
    }

}
isPerfect(6);



//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
function allNumbersTill1000() {
    let finalArray = [];

    for (let z = 2; z < 1000; z++) {
        checkPrime(z, finalArray);
    }

    console.log("List of prime numbers till 1000: " + finalArray);
}
allNumbersTill1000();





