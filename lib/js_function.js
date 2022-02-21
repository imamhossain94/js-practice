
// Arow function in ES6
const func = ()=> {
    console.log('Arrow function is called');
}
func();

const pramFunc = (a, b) => {
    console.log("Arroe function with pram is called");
    console.log('Params are, '+a+' and, '+b);
}

pramFunc("imam", 94);


// Js function and Anonymous function
 
function normalFunc() {
    console.log("Normal function");
}

const anonymousFunc = function() {
    console.log("Anonymous function");
}

normalFunc();
anonymousFunc();


// Assign function to a variables

function sum(a, b) {
    return a+b;
}

const funcVar = sum;

console.log(sum(10, 20));
console.log(funcVar(20, 20));

// Callback function in js

const isEven = (a) => {
    return a%2 == 0;
}

// backticks '`'
const checkANumberIsEvenOrNot = (func, n) => {
    console.log(`This number ${n} is even ${func(n)}`);
}

checkANumberIsEvenOrNot(isEven, 10);
checkANumberIsEvenOrNot(isEven, 11);


// Sum of all the elements of an array
const numberArray = [5, 30, 80, 50, 90, 60, 100, 180];

const sumFunc = numberArray.reduce((process, current) => {
    return process + current;
})

console.log(sumFunc);


// Array forEach method

numberArray.forEach((num)=>{
    console.log(num);
})

// Filter js array

const filteredArray = numberArray.filter((n)=>{
    return n>=100;
})

console.log(filteredArray);


// Array method map 
const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
 
const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.';
})
 
console.log(announcements);



