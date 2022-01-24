// For loop in js

for(let i=1; i <= 5; i++) {
    console.log("*".repeat(i));
    for(let j=1; j<=i; j++){
        //console.log("*".repeat(i));
    }
}


// While loop

let test = 5;

while(test--) {
    console.log("@".repeat(test));
}


// do while loop
x = 0
i = 0
 
do {
  x += i;
  console.log(x)
  i++;
} while (i < 5);


// Array iteration using for loop

const contactArry = ["Imam", "Abdul Ahad", "Rafsan", "Ratul"];
console.log(contactArry.length);

for(let i = 0; i < contactArry.length; i++){
    console.log(contactArry[i]);
}

