class Person {

    constructor(name, quirkyFact, email) {
        this.name = name;
        this.quirkyFact = quirkyFact;
        this.email = email;
    }

    bio() {
        return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}.`;
    }

    contact() {
        return `My email address is ${this.email}.`;
    }
}

class Student extends Person {
    enroll(cohort) {
        this.cohort = cohort;
        return `My cohort is ${this.cohort}.`;
    }
}

class Mentor extends Person {
    goOnshift() {
        this.onShift = true;
    }
    goOffShift() {
        this.onShift = false;
    }
}

const olivier = new Student ('Olivier', 'always eating', 'olivier@me.com');

console.log(olivier.bio(), olivier.contact(), olivier.enroll(2018));
