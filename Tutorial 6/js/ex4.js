const anArray = [];
for (i = 1; i <= 12; i++) {
    anArray.push(i);
}

//console.log(anArray);

//FILTER METHOD - Use the filter method to produce the following
//Write your code prior to the console.log(...) statement

//1.  An array of all the even number
const evenNumbers = anArray.filter(x => x % 2 === 0);
console.log(evenNumbers);  //[2, 4, 6, 8, 10, 12]

//2. An array of all the numbers divisible by 3 OR 5
const divBy3or5 = anArray.filter(elem => elem % 3 === 0 || elem % 5 === 0);
console.log(divBy3or5); //[3, 5, 6, 9, 10, 12]

//MAP METHOD - Use the map method to produce the following

//3.  An array of each number multiplied by 3
const multipBy3 = anArray.map(x => x * 3);
console.log(multipBy3); //[3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]

//FILTER AND MAP

//4.  An array of numbers divible by 4 that are multiplied by 3
const divBy4MultipBy3 = anArray.filter(x => x % 4 === 0).map(y => y * 3);
console.log(divBy4MultipBy3); //[12, 24, 36]

//REDUCE METHOD

//5.  The sum of all the numbers
const arraySum = anArray.reduce((sum, x) => sum + x, 0);
console.log(arraySum); //78

//6.  The sum of all the numbers squared (square each number, then add them up)
const arraySquaredSum = anArray.map(x => x ** 2)
                               .reduce((sum, x) => sum + x, 0);
console.log(arraySquaredSum); //650
