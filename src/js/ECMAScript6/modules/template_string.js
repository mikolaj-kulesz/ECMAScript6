class TemplateString {
    constructor() {
        this.firstExample('Izabelle');
        this.secoundExample('Izabelle');
        this.thirdExample('Izabelle', 100);
    }

    firstExample(firstName) {
        console.log('Hello ' + firstName);
    }

    secoundExample(firstName) {
        console.log(`Hello ${firstName}`);
    }

    thirdExample(firstName, amount) {
        console.log(`Hello ${firstName}, can I borrow $${amount}?`);
    }
}