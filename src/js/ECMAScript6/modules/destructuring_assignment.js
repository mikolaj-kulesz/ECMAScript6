class DestructuringAssignment {
    constructor() {
        this.firstExample();
        this.secoundExample();
        this.thirdExample();
        this.fourthExample();
        this.fifthExample();
    }

     firstExample() {
        //array - old way
        const numberList = ['one','two','three', 'four', 'five'];
        console.log(numberList[0]);
        console.log(numberList[3]);
    }

     secoundExample() {
        //array - new way
        const [first,,,fourth,] = ['one','two','three', 'four', 'five'];
        console.log(first);
        console.log(fourth);

    }

     thirdExample() {
        //obj - old way
        const sandwich = {
            name: "Big Mac",
            price: 7,
            weight: 300,
            taste: "delicious",
            ingredients: ['bread', 'butter', 'onion', 'cucumber', 'letice' , 'beaf']
        };

        console.log(sandwich.name);
        console.log(sandwich.price);
    }

     fourthExample() {
        //obj - new way
        const {name, price} = {
            name: "Big Mac",
            price: 7,
            weight: 300,
            taste: "delicious",
            ingredients: ['bread', 'butter', 'onion', 'cucumber', 'letice' , 'beaf']
        };

        console.log(name);
        console.log(price);
    }

     fifthExample() {
        //obj - new way
        const sandwich = {
            name: "Big Mac",
            price: 7,
            weight: 300,
            taste: "delicious",
            ingredients: ['bread', 'butter', 'onion', 'cucumber', 'letice' , 'beaf']
        };

        const decribe = ({name, price}) =>
            console.log(`This is my sandwich called: ${name}. It costs ${price} PLN.` );

        decribe(sandwich);
    }

}