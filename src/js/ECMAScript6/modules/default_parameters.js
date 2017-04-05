class DefaultParameters {
    constructor() {
        this.firstExample(1,1);
        this.secoundExample(1,1);
        this.secoundExample();
        this.thirdExample('Biking', 3);
        this.thirdExample();
    }

    firstExample(x,y) {
        console.log(x+y);
    }

    secoundExample(x=5,y=6) {
        console.log(x+y);
    }

    thirdExample(activityName='Skiing', time=2) {
        console.log(`Today I will go ${activityName} for ${time} hours`);
    }
}