//  Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'John';
let lastName = 'Doe';
let country = 'USA';
let city = 'New York';
let age = 30;
let isMarried = false;
let year = 2024;

console.log(typeof firstName); 
console.log(typeof lastName);  
console.log(typeof country);   
console.log(typeof city);      
console.log(typeof age);
console.log(typeof isMarried); 
console.log(typeof year);      

//  Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10); 

//  Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10);

// /Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.
console.log(Boolean(1));      
console.log(Boolean('hello'));
console.log(Boolean([]));    

// Falsy values
console.log(Boolean(0));      
console.log(Boolean(''));     
console.log(Boolean(null));  

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3); 
console.log(4 >= 3); 
console.log(4 < 3);  
console.log(4 <= 3); 
console.log(4 == 4); 
console.log(4 === 4);
console.log(4 != 4); 
console.log(4 !== 4);
console.log(4 != '4'); 
console.log(4 == '4'); 
console.log(4 === '4'); 

//  Find the length of python and jargon, and make a falsy comparison statement
let python = 'python';
let jargon = 'jargon';
console.log(python.length); 
console.log(jargon.length); 
console.log(python.length !== jargon.length); 

//  Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12);  
console.log(4 > 3 && 10 > 12);  
console.log(4 > 3 || 10 < 12);  
console.log(4 > 3 || 10 > 12);  
console.log(!(4 > 3));          
console.log(!(4 < 3));          
console.log(!(false));          
console.log(!(4 > 3 && 10 < 12)); 
console.log(!(4 > 3 && 10 > 12)); 
console.log(!(4 === '4'));      

//  Check if there is 'on' in both dragon and python
let dragon = 'dragon';
console.log(dragon.includes('on') && python.includes('on')); 

//  Use the Date object to do the following activitiess
let now = new Date();

console.log(now.getFullYear());      
console.log(now.getMonth() + 1);      
console.log(now.getDate());           
console.log(now.getDay());           
console.log(now.getHours());         
console.log(now.getMinutes());        

//  Find out the number of seconds elapsed from January 1, 1970 to now
let secondsElapsed = Math.floor(now.getTime() / 1000);
console.log(secondsElapsed);
