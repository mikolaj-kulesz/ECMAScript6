class ArrowFunction {
    constructor() {
        this.firstExample();
        this.secoundExample();
        this.thirdExample();
    }

    firstExample() {
        const numberList = function(numbers){
            console.log(numbers)
        };
        numberList([1,2,3,4,5]);
    }

    secoundExample() {
        const numberList = (numbers) =>
            console.log(numbers);

        numberList([1,2,3,4,5]);

    }

    thirdExample() {
        //when passing only one arg
        const numberList = numbers =>
            console.log(numbers);

        numberList([1,2,3,4,5]);

    }


}