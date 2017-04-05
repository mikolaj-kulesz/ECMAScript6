class ClassSyntax {
    constructor() {
        this.firstExample();
    }

    firstExample() {

        class Vehicle {
            constructor(desc, wheels){
                this.desc = desc || 'BMW e23';
                this.wheels = wheels || 4;
            }

            describe(){
                console.log(`I'am ${this.desc} vehicle, with ${this.wheels} wheels` );
            }
        }

        const coolSkiVan = new Vehicle('cool ski van' ,5);
        coolSkiVan.describe();

        const defaultVehicle = new Vehicle();
        defaultVehicle.describe();

        class SemiTruck extends Vehicle {
            constructor(){
                super('semi trick', 18);
            }
        }

        const mySemiTruck = new SemiTruck();
        mySemiTruck.describe();
    }

}