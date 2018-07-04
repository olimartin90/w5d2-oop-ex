class Person {

    constructor(name, quirkyFact, email) {
        this.name = name;
        this.quirkyFact = quirkyFact;
        this.email = email;
    }

    bio() {
        return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}.`;
    }
}

class Student extends Person {
    bio() {
        return `I'm a student at Lighthouse Labs. ${super.bio()}`;
    }
}

const olivier = new Student('Olivier Martin', 'I like motocross way too much');
console.log(olivier.bio());