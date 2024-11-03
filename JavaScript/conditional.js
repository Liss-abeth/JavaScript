//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let myAge = 25;
let yourAge = parseInt(prompt("Enter your age:"));


if (isNaN(yourAge)) {
    console.log("Please enter a valid age.");
} else {
  
    if (yourAge >= 18) {
        console.log('You are old enough to drive.');
    } else {
        let yearsLeft = 18 - yourAge;
        console.log(`You are left with ${yearsLeft} years to drive.`);
    }

    if (yourAge > myAge) {
        console.log(`You are ${yourAge - myAge} years older than me.`);
    } else if (yourAge < myAge) {
        console.log(`I am ${myAge - yourAge} years older than you.`);
    } else {
        console.log("We are the same age!");
    }
}

//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let a = 4;
let b = 3;

if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is less than b');
}


console.log(a > b ? 'a is greater than b' : 'a is less than b');

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.
let number = parseInt(prompt("Enter a number:"));

if (number % 2 === 0) {
    console.log(`${number} is an even number.`);
} else {
    console.log(`${number} is an odd number.`);
}


//Write a code which can give grades to students according to theirs scores:


let score = parseInt(prompt("Enter the student's score:"));

if (score >= 80 && score <= 100) {
    console.log('A');
} else if (score >= 70) {
    console.log('B');
} else if (score >= 60) {
    console.log('C');
} else if (score >= 50) {
    console.log('D');
} else if (score >= 0) {
    console.log('F');
} else {
    console.log('Invalid score');
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let months = prompt("Enter a month:").toLowerCase();

if (['september', 'october', 'november'].includes(months)) {
    console.log('The season is Autumn.');
} else if (['december', 'january', 'february'].includes(months)) {
    console.log('The season is Winter.');
} else if (['march', 'april', 'may'].includes(months)) {
    console.log('The season is Spring.');
} else if (['june', 'july', 'august'].includes(months)) {
    console.log('The season is Summer.');
} else {
    console.log('Invalid month.');
}
//Check if a day is weekend day or a working day. Your script will take day as an input.

let day = prompt("What is the day today?").toLowerCase();

if (['saturday', 'sunday'].includes(day)) {
    console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend.`);
} else if (['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].includes(day)) {
    console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a working day.`);
} else {
    console.log('Invalid day.');
}

//Write a program which tells the number of days in a month.
let month = prompt("Enter a month:").toLowerCase();

if (['january', 'march', 'may', 'july', 'august', 'october', 'december'].includes(month)) {
    console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days.`);
} else if (['april', 'june', 'september', 'november'].includes(month)) {
    console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days.`);
} else if (month === 'february') {
    console.log('February has 28 days.');
} else {
    console.log('Invalid month.');
}
