// Declare an empty array
let emptyArray = [];

// Declare an array with more than 5 number of elements
let numbers = [10, 20, 30, 40, 50, 60];

// Find the length of your array
console.log('Length of numbers array:', numbers.length);

// Get the first item, the middle item, and the last item of the array
console.log('First item:', numbers[0]);
console.log('Middle item:', numbers[Math.floor(numbers.length / 2)]);
console.log('Last item:', numbers[numbers.length - 1]);

// Declare an array called mixedDataTypes with different data types
let mixedDataTypes = [5, 'Hello', true, {name: 'John'}, [1, 2, 3], null];

// Find the length of the mixedDataTypes array
console.log('Length of mixedDataTypes array:', mixedDataTypes.length);

// Declare an array variable named itCompanies and assign initial values
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log('Number of companies:', itCompanies.length);

// Print the first, middle, and last company
console.log('First company:', itCompanies[0]);
console.log('Middle company:', itCompanies[Math.floor(itCompanies.length / 2)]);
console.log('Last company:', itCompanies[itCompanies.length - 1]);

// Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', ') + ' are big IT companies.');

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let companyToCheck = 'Google';
if (itCompanies.includes(companyToCheck)) {
    console.log(companyToCheck);
} else {
    console.log('Company is not found');
}

// Filter out companies which have more than one 'o' without the filter method
let companiesWithMoreThanOneO = [];
for (let i = 0; i < itCompanies.length; i++) {
    let countO = 0;
    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j].toLowerCase() === 'o') {
            countO++;
        }
    }
    if (countO <= 1) {
        companiesWithMoreThanOneO.push(itCompanies[i]);
    }
}
console.log('Companies with no more than one "o":', companiesWithMoreThanOneO);

// Sort the array using sort() method
itCompanies.sort();
console.log('Sorted companies:', itCompanies);

// Reverse the array using reverse() method
itCompanies.reverse();
console.log('Reversed companies:', itCompanies);

// Slice out the first 3 companies from the array
console.log('First 3 companies:', itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log('Last 3 companies:', itCompanies.slice(itCompanies.length - 3));

// Slice out the middle IT company or companies from the array
let middleIndex = Math.floor(itCompanies.length / 2);
console.log('Middle company:', itCompanies.slice(middleIndex, middleIndex + 1));

// Remove the first IT company from the array
itCompanies.shift();
console.log('After removing first company:', itCompanies);

// Remove the middle IT company or companies from the array
middleIndex = Math.floor(itCompanies.length / 2);
itCompanies.splice(middleIndex, 1);
console.log('After removing middle company:', itCompanies);

// Remove the last IT company from the array
itCompanies.pop();
console.log('After removing last company:', itCompanies);

// Remove all IT companies
itCompanies = [];
console.log('All companies removed:', itCompanies);



let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// Remove all punctuation using regular expression and change the string to an array
let words = text.replace(/[.,]/g, '').split(' ');

// Print the array of words
console.log(words);

// Print the number of words in the array
console.log(words.length);


const countries = [
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
  ];
  
  // Check if 'Ethiopia' exists in the array
  if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
  } else {
    // If it does not exist, add 'Ethiopia' to the countries list
    countries.push('Ethiopia');
  }
  
  // Print the updated countries array
  console.log(countries);
  

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
  
  // Check if 'Sass' exists in the array
  if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
  } else {
    // If it does not exist, add 'Sass' to the array
    webTechs.push('Sass');
    // Print the updated array
    console.log(webTechs);
  }


  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
console.log(ages[0]);
let mins = ages[0]
console.log(mins);
let maxs = ages[ages.length-1]
console.log(maxs) 
console.log(ages[ages.length-1]) 


2
let mid = Math.floor((ages.length/2)) 
let median
if (ages.length%2==0){
    median = (ages[mid-1] + ages[mid]) /2
}
else{
    median=ages[mid]
}
console.log(median);

3
let total = 0
for (i = 0; i < ages.length; i++) {
    total += ages[i]
}
let avg= total / ages.length
console.log(avg);

4
let min = ages[0]
let max = ages[ages.length - 1]
let range = max - min
console.log(range);

const diffMinAvg = Math.abs(mins - avg);
const diffMaxAvg = Math.abs(maxs - avg);
console.log('Difference (Min - Average):', diffMinAvg);
console.log('Difference (Max - Average):', diffMaxAvg);

// Step 6: Slice the first ten countries from the countries array
const firstTenCountries = countries.slice(0, 10);
console.log('First Ten Countries:', firstTenCountries);

const length = countries.length;

// Step 2: Find the middle index
const middlIndex = Math.floor(length / 2);

// Step 3: Divide the array into two halves
let firstHalf, secondHalf;

if (length % 2 === 0) {
    // If even, split into two equal parts
    firstHalf = countries.slice(0, middlIndex);
    secondHalf = countries.slice(middleIndex);
} else {
    // If odd, first half has one more country
    firstHalf = countries.slice(0, middlIndex + 1);
    secondHalf = countries.slice(middlIndex + 1);
}

let middleCountries;
if (length % 2 === 0) {
    // If even, two middle countries
    middleCountries = countries[middlIndex - 1] + ' and ' + countries[middlIndex];
} else {
    // If odd, one middle country
    middleCountries = countries[middleIndex];
}

// Output results
console.log('First Half:', firstHalf);
console.log('Second Half:', secondHalf);
console.log('Middle Country(ies):', middleCountries);