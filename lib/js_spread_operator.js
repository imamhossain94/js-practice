// Js spread operator
// Syntex ...


// Problem
let arrOne = [5, 6, 7, 8, 9, 10]
let arrTwo = arrOne

arrOne[0] = 55 // this line changes both array

// Why??
// Because when we assign arrTow in arrOne
// they are alocated on the same memory
// so when we change a value. the value changed from
// the memory location.

console.log(arrOne)
console.log(arrTwo)

// Solution
// We can use spread operator to make a copy of array

arrOne = [5, 6, 7, 8, 9, 10]
arrTwo = [...arrOne] // the differences

arrOne[0] = 55

console.log(arrOne)
console.log(arrTwo)



// Thank You!! Dip vai for this lession.


