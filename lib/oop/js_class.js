// Js class 

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // getter
    set setName(name) {
        this.name = name;
    }

    set setAge(age) {
        this.age = age;
    }

    // setter
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }

    printPerson() {
        console.log(`Person Name: ${this.name}`);
        console.log(`Person Age: ${this.age}`);
    }

}


class Imam extends Person {
    constructor(name, age) {
        super(name, age);
    }
}


let imam = new Imam('Imam', 24);
imam.printPerson(); 

console.log(imam.getName);
console.log(imam.getAge);

