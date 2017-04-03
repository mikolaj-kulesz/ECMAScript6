class Const {
    constructor() {
        this.firstExample();
        this.secoundExample();
        this.thirdExample(10);
        this.thirdExample(11);
        this.thirdExample(9);
    }

    firstExample() {
        const x = 1;
        var y = 1 + x;
        console.log(y);
    }

    secoundExample() {

        const zzz = 1;
        //zzz = 2; //- couse error
    }

    thirdExample(someNumber) {

        const myNumber = 10;
        if( myNumber <= someNumber){
            console.log('my number is smaller or equal')
        } else {
            console.log('my number is bigger')
        }
    }
}