class ObjectLiterals {
    constructor() {
        this.firstExample();
        this.secoundExample();
    }

    firstExample() {
        const obj = {
            one: function (times) {
                console.log(Array(times + 1).join('one '));
            },
            two: function (times) {
                console.log(Array(times + 1).join('two '));
            },
            three: function (times) {
                console.log(Array(times + 1).join('three '));
            }
        }

        obj.one(2);
        obj.two(3);
        obj.three(4);
    }

    secoundExample() {
        const obj = {
            one(times) {
                console.log(('one2 ').repeat(times));
            },
            two(times) {
                console.log(('two ').repeat(times));
            },
            three(times) {
                console.log(('three ').repeat(times));
            }
        };

        obj.one(2);
        obj.two(3);
        obj.three(4);
    }


}