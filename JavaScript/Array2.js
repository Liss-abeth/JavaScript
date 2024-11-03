// In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'




let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
let m='Meat'
if(shoppingCart.includes(m)){
    console.log('Alredy exited');
    
}
else(shoppingCart.unshift(m))
    console.log(shoppingCart);
let s='Sugar'
if(shoppingCart.includes(s)){
    console.log('Alredy exited');
    
}
else(shoppingCart.push(s))
    console.log(shoppingCart);

    let isAllergy='yes'
    if (isAllergy=='yes') {
        shoppingCart = shoppingCart.filter(item => item !== 'Honey');
}
    

for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i] === 'Tea') {
      shoppingCart[i] = shoppingCart[i].replace('Tea', 'Green Tea');
    }
  }
  
  console.log(shoppingCart);




  const countries=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let land=[]
for(const items of countries){
    if(items.endsWith('LAND')){
        land.push(items)
    }
}
 console.log(land)


 let countriess = ['India', 'Japan', 'Canada'];

if (countriess.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
  console.log('Ethiopia added to the list.');
}

console.log(countriess); 


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);



const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort(function(a, b) {
    return a - b;
});
console.log("Sorted Ages:", ages);


const minAge = Math.min.apply(null, ages);
const maxAge = Math.max.apply(null, ages);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);



let medianAge;
const middleIndex = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
    medianAge = ages[middleIndex];
}
console.log("Median Age:", medianAge);

const totalAge = ages.reduce(function(acc, age) {
    return acc + age;
}, 0);
const averageAge = totalAge / ages.length;
console.log("Average Age:", averageAge);


const ageRange = maxAge - minAge;
console.log("Age Range:", ageRange);