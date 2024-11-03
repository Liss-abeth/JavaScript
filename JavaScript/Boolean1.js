//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let sentence="Love is the best thing in this world. Some found their love and some are still looking for their love"
console.log(sentence.match(/love/gi));

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence2='You cannot end a sentence with because because because is a conjunction'
console.log(sentence2.match(/because/gi));


//Compare your first name length and your family name length and you should get this output.
let fname="Lissabeth"
let lname="Karakkattu"
let flen=fname.length
let llen=lname.length
let output=flen>llen
console.log(`Your first name, ${fname} is ${output ? 'longer':'not longer'} than your family name, ${lname}`);

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAgee = 250
let yourAgee = 25
let agee=myAgee-yourAgee
console.log((`I am ${agee} years older than you.`));





//Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let cleanSentence = sentences.replace(/[%$@&#;!?,.]/g, '');
console.log(cleanSentence);

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let numbers = incomeText.match(/\d+/g).map(Number);
let totalAnnualIncome = (numbers[0] * 12) + numbers[1] + (numbers[2] * 12); 

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let x1 = window.prompt("Enter x1:");
let y1 = window.prompt("Enter y1:");
let x2 = window.prompt("Enter x2:");
let y2 = window.prompt("Enter y2:");
let slope = (y2 - y1) / (x2 - x1);
window.alert(`The slope between the points (${x1}, ${y1}) and (${x2}, ${y2}) is: ${slope}`);

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hour= window.prompt("Enter the hour")
let hr= window.prompt("Enter rate per hour")
let earning=hour*hr
window.alert(`Your weekly earning is ${earning}`);

//If the length of your name is greater than 7 say, your name is long else say your name is short.
let name=window.prompt("Enter your name")
let l=name.length>7
?"Your name is Long"
:"Your name is Short";
window.alert(l)

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = window.prompt("Enter base: ");
let height = window.prompt("Enter height: ");
let area = 0.5 * base * height;
window.alert(`The area of the triangle is ${area}`);


// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = window.prompt("Enter side a: ");
let sideB = window.prompt("Enter side b: ");
let sideC =window.prompt("Enter side c: ");
let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
window.alert(`The perimeter of the triangle is ${perimeter}`);


// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = window.prompt("Enter length: ");
let width = window.prompt("Enter width: ");
let areaRectangle = length * width;
let perimeterRectangle = 2 * (parseFloat(length) + parseFloat(width));
window.alert(`The area of the rectangle is ${areaRectangle}`);
window.alert(`The perimeter of the rectangle is ${perimeterRectangle}`);

// Circle area and circumference calculation
const pi = 3.14;
let radius = window.prompt("Enter radius: ");
let areaCircle = pi * radius * radius;
let circumference = 2 * pi * radius;
window.alert(`The area of the circle is ${areaCircle}`);
window.alert(`The circumference of the circle is ${circumference}`);


// Calculate the slope, x-intercept and y-intercept of y = 2x -2


let slope1 = 2; 
let xIntercept = -(-2) / 2; 
let yIntercept = -2; 
window.alert(`The slope is ${slope1}, x-intercept is ${xIntercept}, and y-intercept is ${yIntercept}`);

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2, y1 = 2, x2 = 6, y2 = 10;
let slope2 = (y2 - y1) / (x2 - x1);
window.alert(`The slope between the points is ${slope2}`);

window.alert(slope1 === slope2 ? "The slopes are equal" : "The slopes are different");

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
for (let x = -10; x <= 10; x++) {
    let y = x * x + 6 * x + 9;
    window.alert(`When x = ${x}, y = ${y}`);
  }
  // Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hourss = window.prompt("Enter hours: ");
let rate = window.prompt("Enter rate per hour: ");
let weeklyEarning = hourss * rate;
window.alert(`Your weekly earning is ${weeklyEarning}`);
//If the length of your name is greater than 7 say, your name is long else say your name is short.

//Compare your first name length and your family name length and you should get this output.
let firstName = 'Lissabeth';
let lastName = 'Babu';
if (firstName.length > lastName.length) {
  console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
} else {
  console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`);
}
//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250;
let yourAge = 25;
let ageDifference = myAge - yourAge;
console.log(`I am ${ageDifference} years older than you.`);
//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years
let birthYear = window.prompt("Enter your birth year: ");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
if (age >= 18) {
  window.alert(`You are ${age}. You are old enough to drive`);
} else {
  window.alert(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);
}
//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let yearsLived = window.prompt("Enter number of years you lived: ");
let secondsLived = yearsLived * 365 * 24 * 60 * 60;
window.alert(`You lived ${secondsLived} seconds.`);

// Create a human readable time format using the Date time object
let now = new Date();

let year = now.getFullYear();
let month = ('0' + (now.getMonth() + 1)).slice(-2);
let day = ('0' + now.getDate()).slice(-2);
let hours = ('0' + now.getHours()).slice(-2);
let minutes = ('0' + now.getMinutes()).slice(-2);

console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
console.log(`${day}-${month}-${year} ${hours}:${minutes}`); 
console.log(`${day}/${month}/${year} ${hours}:${minutes}`); 
console.log(`${year}-${month}-${day} ${hours}:${minutes}`); 

