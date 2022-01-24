// Decleare a js objects and access it properties using dot notation
// Example 1
const apple = { 
    color: 'Green',
    price: {
      bulk: '$3/kg',
      smallQty: '$4/kg'
    }
  };

console.log(apple.color);
console.log(apple.price.bulk);

// Example 2
const juice = {
    name: 'Mango Juice',
    weight: {
        kg: 1,
        gm: 1000,
    } ,
    price: {
        bdt: 100.0,
        usd: 1.2,
    }
}

console.log(juice);
console.log(juice.price.bdt);
console.log(juice.price.euro); // not defined in the object


// delete a properties from an js object
delete apple.price;
apple.weight = '100gm';
console.log(apple);


// Iterate throuth a js object using For..in method
for (let key in juice) {
    console.log(`${key}: ${juice[key]}`);
}


// Js objects with methods

const mathObj = {
    isEven: (n)=> {
        return n%2 == 0;
    },
    isOdd: (n)=> {
        return n%2 != 0;
    },
    square(n) {
        return n*n;
    }
}

console.log(mathObj.isEven(10));
console.log(mathObj.isOdd(10));
console.log(mathObj.square(10));



// Passing obj as argument on a function

const evenOddSquare = (obj, n)=> {
    console.log(obj.isEven(n));
    console.log(obj.isOdd(n));
    console.log(obj.square(n));
}

evenOddSquare(mathObj, 3);





