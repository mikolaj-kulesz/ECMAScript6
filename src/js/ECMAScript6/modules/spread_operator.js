class SpreadOperator {
    constructor() {
        this.firstExample();
        this.secoundExample();
        //this.thirdExample('Izabelle', 100);
    }

    firstExample() {
        var arrOne = [1,2,3];
        var arrTwo = [4,5,6];
        var arrThree = [7,arrOne,8,arrTwo,9];
        console.log(arrThree);
    }

    secoundExample(firstName) {
        var arrOne = [1,2,3];
        var arrTwo = [4,5,6];
        var arrThree = [7,...arrOne,8,...arrTwo,9];
        console.log(arrThree);
    }
}