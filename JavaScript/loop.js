
//Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}


let j = 0;
while (j <= 10) {
    console.log(j);
    j++;
}


let k = 0;
do {
    console.log(k);
    k++;
} while (k <= 10);


//Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
    console.log(i);
}


let m = 10;
while (m >= 0) {
    console.log(m);
    m--;
}


let a = 10;
do {
    console.log(a);
    a--;
} while (a >= 0);


//Iterate 0 to n using for loop
const n = 10; 
console.log(`Iterate 0 to ${n} using for loop:`);
for (let i = 0; i <= n; i++) {
    console.log(i);
}

//Write a loop that makes the following pattern using console.log()
for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i));
}

//Use loop to print the following pattern
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}
//Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}
//

for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}
//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0; 
for (let i = 0; i <= 100; i++) {
    sum += i; 
}
console.log("Sum of all numbers from 0 to 100:", sum);


//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sumEvens = 0;
let sumOdds = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEvens += i; 
    } else {
        sumOdds += i;
    }
}

console.log([sumEvens, sumOdds]); 

//Develop a small script which generate array of 5 random numbers
let randomNumbers = [];

for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100)); 
}

console.log("Random Numbers:", randomNumbers);


//Develop a small script which generate array of 5 random numbers and the numbers must be unique

let uniqueNumbers = new Set();

while (uniqueNumbers.size < 5) {
    uniqueNumbers.add(Math.floor(Math.random() * 100)); 
}

console.log("Unique Random Numbers:", Array.from(uniqueNumbers));
//Develop a small script which generate a six characters random id:

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomID = '';

for (let i = 0; i < 6; i++) {
    randomID += characters.charAt(Math.floor(Math.random() * characters.length));
}

console.log("Random ID:", randomID);





const countriese = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  let newCon=[]
  for(const item of countriese){
    let land=item.match(/land/gi)
    if(land!=null){
        newCon.push(item)
    }
  }
  console.log(newCon)


  
//Develop a small script which generate any number of characters random id:
  function randomIdGenerator(length) {
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
  }
  
  console.log(randomIdGenerator(12)); 
  console.log(randomIdGenerator(24)); 
  //Write a script which generates a random hexadecimal number.
  (function() {
    let hexColor = '#';
    const hexChars = '0123456789abcdef';
    
    for (let i = 0; i < 6; i++) {
        hexColor += hexChars[Math.floor(Math.random() * 16)];
    }
    
    console.log(hexColor); 
})();


  //Write a script which generates a random rgb color number.

  function randomRgbColorGenerator() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    console.log(`rgb(${r}, ${g}, ${b})`);
}

randomRgbColorGenerator();

//Using the above countries array, create the following new array.


let countriees = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
let upperCaseCountries = [];

for (let i = 0; i < countriees.length; i++) {
    upperCaseCountries.push(countriees[i].toUpperCase());
}

console.log(upperCaseCountries);


//Using the above countries array, create an array for countries length'.
  
const ccountries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
const countryLengths = [];

for (let i = 0; i < ccountries.length; i++) {
    countryLengths.push(ccountries[i].length);
}

console.log(countryLengths);



//Use the countries array to create the following array of arrays:

const countriesss = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
const countryArray = [];

for (let i = 0; i < countriesss.length; i++) {
    const country = countriesss[i];
    countryArray.push([country, country.slice(0, 3).toUpperCase(), country.length]);
}

console.log(countryArray);

//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

const countriess = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
const countriesWithLand = [];

for (let i = 0; i < countriess.length; i++) {
    if (countriess[i].includes('land')) {
        countriesWithLand.push(countriess[i]);
    }
}

console.log(countriesWithLand.length > 0 ? countriesWithLand : 'All these countries are without land');


//Using the above countries array, find the country containing the biggest number of characters.
const countriies = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
const countriesWithIa = [];

for (let i = 0; i < countriies.length; i++) {
    if (countriies[i].endsWith('ia')) {
        countriesWithIa.push(countriies[i]);
    }
}

console.log(countriesWithIa.length > 0 ? countriesWithIa : 'These countries end without ia');

//Using the above countries array, find the country containing only 5 characters.


const countries1 = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
let longestCountry = '';

for (let i = 0; i < countries1.length; i++) {
    if (countries1[i].length > longestCountry.length) {
        longestCountry = countries1[i];
    }
}

console.log(longestCountry);



//Find the longest word in the webTechs array
const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
const fiveLetterCountries = [];

for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        fiveLetterCountries.push(countries[i]);
    }
}

console.log(fiveLetterCountries);

//
const webTechss = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];
let longestWebTech = '';

for (let i = 0; i < webTechss.length; i++) {
    if (webTechss[i].length > longestWebTech.length) {
        longestWebTech = webTechss[i];
    }
}

console.log(longestWebTech);

//Use the webTechs array to create the following array of arrays:
const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];
const webTechArray = [];

for (let i = 0; i < webTechs.length; i++) {
    webTechArray.push([webTechs[i], webTechs[i].length]);
}

console.log(webTechArray);




//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack


const mernStack = ["MongoDB", "Express", "React", "Node"];
let mernAcronym = '';

for (let i = 0; i < mernStack.length; i++) {
    mernAcronym += mernStack[i][0];
}

console.log(mernAcronym);

//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.



const technologies = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (const tech of technologies) {
  console.log(tech);
}


//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}

console.log(reversedFruits); 


//Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];
  
  for (const stack of fullStack) {
    for (const tech of stack) {
      console.log(tech.toUpperCase());
    }
  }
  
  