//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge="30 Days Of JavaScript"

//Print the string on the browser console using console.log()
console.log(challenge);

//Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

//Cut (slice) out the first word of the string using substr() or substring() method
let firstword=challenge.substring(2,challenge.indexOf(''));
console.log(firstword);

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(2));

//Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

//Split the string into an array using split() method
console.log(challenge.split());

//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "));

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(' '));

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log( challenge.replace('JavaScript','Python'));

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'));

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let para='You cannot end a sentence with because because because is a conjunction'
console.log(para.indexOf('because'));

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(para.lastIndexOf('because'));

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(para.search('because'));

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim(''));

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'));

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'));

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match(/a/gi));

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let a="30 Days Of "
console.log(a.concat("JavaScript"));

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log((challenge+'\n').repeat(2));


//  Print the quote from John Holmes
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

//  Print the quote from Mother Teresa
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

// Check if typeof '10' is exactly equal to 10. If not, make it exactly equal
console.log(typeof '10' === typeof 10); // false
let num = parseInt('10');
console.log(num === 10); // true

//  Check if parseFloat('9.8') is equal to 10. If not, make it exactly equal with 10
let floatNum = parseFloat('9.8');
console.log(floatNum === 10); // false
floatNum = Math.round(floatNum);
console.log(floatNum === 10); // true

//  Check if 'on' is found in both python and jargon
console.log('python'.includes('on')); // true
console.log('jargon'.includes('on')); // true

//  Check if jargon is in the sentence
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes('jargon')); // true

// Generate a random number between 0 and 100 inclusively
console.log(Math.floor(Math.random() * 101)); // Random number between 0 and 100

//  Generate a random number between 50 and 100 inclusively
console.log(Math.floor(Math.random() * 51) + 50); // Random number between 50 and 100

//  Generate a random number between 0 and 255 inclusively
console.log(Math.floor(Math.random() * 256)); // Random number between 0 and 255

//  Access 'JavaScript' string characters using a random number
let jsString = 'JavaScript';
let randomIndex = Math.floor(Math.random() * jsString.length);
console.log(jsString[randomIndex]);

//  Print the following pattern using escape characters
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

//  Slice out 'because because because' from the sentence
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence2.substr(31, 23)); // Output: because because because









