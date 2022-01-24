//Logical operator

console.log(true && 10>5);

//Ternary operator

let price = 10.5;
let day = "Monday";

day === "Monday" ? price += 1.5 : price -= 1.5;

console.log(price);

// else if statement

const isTaskComplete = true;
if(isTaskComplete) {
    console.log("Taski Completed");
}else{
    console.log("Task incompleted");
}

// switch statement

const food = "apple";

switch(food) {
    case 'apple':
        console.log("this is an apple");
        break;
    case 'mango':
        console.log('this is mango');
        break;
    case 'banana':
        console.log("this is banana");
        break;
    default:
        console.log('Enjoy your meal');
}

