
//Declare a function fullName and it print out your full name.

function fullName() {
    console.log("John Doe");
  }
  fullName();

  
//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  console.log(fullName("John", "Doe"));

  //Declare a function addNumbers and it takes two two parameters and it returns sum.
  function addNumbers(num1, num2) {
    return num1 + num2;
  }
  console.log(addNumbers(5, 10));

  //An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
  function areaOfRectangle(length, width) {
    return length * width;
  }
  console.log(areaOfRectangle(5, 10));

  
//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}
console.log(perimeterOfRectangle(5, 10));


//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.


function volumeOfRectPrism(length, width, height) {
    return length * width * height;
  }
  console.log(volumeOfRectPrism(5, 10, 8));
//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
  
  function areaOfCircle(radius) {
    return Math.PI * radius * radius;
  }
  console.log(areaOfCircle(7));
  
//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
  function circumOfCircle(radius) {
    return 2 * Math.PI * radius;
  }
  console.log(circumOfCircle(7));
  
//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
  function density(mass, volume) {
    return mass / volume;
  }
  console.log(density(10, 5));
  
//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function density(mass, volume) {
  console.log(mass / volume);
}

density(10, 5);

  
//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.



function weight(mass, gravity = 9.81) {
  console.log(mass * gravity);
}

weight(75);


  
//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
  function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  console.log(convertCelsiusToFahrenheit(30));

  

  //Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
  function checkSeason(month) {
    month = month.toLowerCase();

    if (['september', 'october', 'november'].includes(month)) {
        console.log('Autumn');
    } else if (['december', 'january', 'february'].includes(month)) {
        console.log('Winter');
    } else if (['march', 'april', 'may'].includes(month)) {
        console.log('Spring');
    } else if (['june', 'july', 'august'].includes(month)) {
        console.log('Summer');
    } else {
        console.log('Invalid month');
    }
}




// //Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.



let maxvalue=(a,b,c)=>{
    if(a>b&&a>c){
        console.log(`${a} is the maximun`)
    }
    else if(b>a&&b>c){
        console.log(`${b} is the maximun`)
    }
    else{
        console.log(`${c} is maximum`)
    }
}
maxvalue(0,10,2)
maxvalue(9,-9,99)



  
  //Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
  function solveQuadEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        console.log('No real roots');
    } else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        if (discriminant === 0) {
            console.log([root1]); // One root
        } else {
            console.log([root1, root2]); // Two roots
        }
    }
}


  
//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

  function printArray(arr) {
    arr.forEach(item => console.log(item));
  }
  printArray([1, 2, 3, 4]);

//   Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08
  

  function showDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
  console.log(showDateTime());



  // Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c, x, y) {
  return a * x + b * y + c === 0;
}

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a = 1, b = 0, c = 0) {
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return 'No real roots';
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return `{${root}}`;
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return `{${root1}, ${root2}}`;
  }
}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  arr.forEach(item => console.log(item));
}

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  const now = new Date();
  const date = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  console.log(`${month}/${date}/${year} ${hours}:${minutes}`);
}

//Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
  [x, y] = [y, x];
  console.log(`x => ${x}, y => ${y}`);
}

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.


function capitalizeArray(arr) {
  return arr.map(item => item.toUpperCase());
}

//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item


function addItem(item, arr = []) {
  arr.push(item);
  return arr;
}

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index, arr) {
  arr.splice(index, 1);
  return arr;
}

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.


function sumOfOdds(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.


function sumOfEven(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number
function evensAndOdds(num) {
  let evens = 0, odds = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) evens++;
    else odds++;
  }
  console.log(`The number of evens are ${evens}`);
  console.log(`The number of odds are ${odds}`);
}

//Write a function which takes any number of arguments and return the sum of the arguments
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

// Writ a function which generates a randomUserIp
function randomUserIp() {
  return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

// Write a function which generates a randomMacAddress


function randomMacAddress() {
  const hexDigits = "0123456789ABCDEF";
  let macAddress = "";
  for (let i = 0; i < 6; i++) {
    macAddress += hexDigits.charAt(Math.floor(Math.random() * 16));
    macAddress += hexDigits.charAt(Math.floor(Math.random() * 16));
    if (i !== 5) macAddress += ":";
  }
  return macAddress;
}

//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number
function randomHexaNumberGenerator() {
  const hexNumber = '#' + Math.floor(Math.random() * 16777215).toString(16);
  console.log(hexNumber);
}

randomHexaNumberGenerator(); 


// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id
function userIdGenerator() {
  return Math.random().toString(36).substring(2, 9);
}

// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {
  const numChars = prompt('Enter number of characters: ');
  const numIds = prompt('Enter number of IDs: ');
  let ids = [];
  for (let i = 0; i < numIds; i++) {
    ids.push(Math.random().toString(36).substring(2, 2 + parseInt(numChars)));
  }
  console.log(ids.join('\n'));
}

// Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

//Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array
function arrayOfHexaColors(num) {
  const colors = [];
  for (let i = 0; i < num; i++) {
    colors.push(randomHexaNumberGenerator());
  }
  return colors;
}

// Write a function arrayOfRgbColors which return any number of RGB colors in an array
function arrayOfRgbColors(num) {
  const colors = [];
  for (let i = 0; i < num; i++) {
    colors.push(rgbColorGenerator());
  }
  return colors;
}

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color
function convertHexaToRgb(hexa) {
  let r = parseInt(hexa.slice(1, 3), 16);
  let g = parseInt(hexa.slice(3, 5), 16);
  let b = parseInt(hexa.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

//Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color
function convertRgbToHexa(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

//Write a function generateColors which can generate any number of hexa or rgb colors
function generateColors(type, num) {
  return type === 'hexa' ? arrayOfHexaColors(num) : arrayOfRgbColors(num);
}

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(num) {
  return num <= 1 ? 1 : num * factorial(num - 1);
}

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(param) {
  return param === undefined || param === null || param === '';
}

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arr) {
  if (arr.every(item => typeof item === 'number')) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  } else {
    return 'All items must be numbers';
  }
}

//Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
  if (arr.every(item => typeof item === 'number')) {
    return sumOfArrayItems(arr) / arr.length;
  } else {
    return 'All items must be numbers';
  }
}

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(arr) {
  if (arr.length < 5) {
    return 'Not Found';
  } else {
    arr[4] = arr[4].toUpperCase();
    return arr;
  }
}

// Write a function called isPrime, which checks if a number is prime number.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

//Write a functions which checks if all items are unique in the array.
function areItemsUnique(arr) {
  return new Set(arr).size === arr.length;
}

// Write a function which checks if all the items of the array are the same data type.
function areSameType(arr) {
  const firstType = typeof arr[0];
  return arr.every(item => typeof item === firstType);
}

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(variable) {
  return /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(variable);
}

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function sevenRandomNumbers() {
  const uniqueNumbers = []; 

  while (uniqueNumbers.length < 7) {
      const randomNum = Math.floor(Math.random() * 10); 


      if (!uniqueNumbers.includes(randomNum)) {
          uniqueNumbers.push(randomNum);
      }
  }

  console.log(uniqueNumbers);
}


sevenRandomNumbers();



//   Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

//   The same groups apply to both men and women.
//   Underweight: BMI is less than 18.5
//   Normal weight: BMI is 18.5 to 24.9
//   Overweight: BMI is 25 to 29.9
//   Obese: BMI is 30 or more

// let weight=window.prompt("enter your weight")
// let height=window.prompt("Enter your height")
// let age=window.prompt("enter your age")

// let calbmi=(weight,height,age)=>{
//      if (age>=20){
//  let bmi= weight/(height*height);

//  if(bmi<18.55){
//      window.alert(" you are under weight");
//  }
//      else if(bmi>=18.5 && bmi<=24.9){
//          window.alert("Normal weight");
//      }
//      else if(bmi>=25 && bmi<=29.9){
//          window.alert(" you are Overweight");     }
//     else{
//      window.alert("Obese");
  
//      }
//      }
//      else{
//          window.alert("Age should be more than 20 years")
//      }
  
//  }
//  calbmi(weight,height,age)