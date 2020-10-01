const Cupcake = require('./cupcake')

class Shop {
    constructor (location, owner) {
        this.location = location;
        this.owner = owner;
    }

    getLocation(){
        console.log(`This shop is at: ${this.location}`);
     }

    getOwner(){
        console.log(`This shop is owned by: ${this.owner}`);
    }

    changeOwner(newOwner){
        this.owner = newOwner;
    }
}

class CupcakeShop extends Shop {
    constructor(location, owner, name){
        super(location, owner)
        this.name = name;
        this.inventory = [];
        this.cash = 0;
    }

    bakeBatch(count, batter, icing, price){
        //Make COUNT cupcakes, add them into inventory
    for(let i = 0; i < count; i++){
        let newCupcake = new Cupcake(icing, batter, price);
        this.inventory.push(newCupcake)
        }
    }

    sellCupcake(){
        //Remove cupcake from inventory, increase cash by price of cupcake
        let soldCupcake = this.inventory.pop()
        this.cash += soldCupcake.price;
    }
}

let newShop = new CupcakeShop('Rochester', 'Sally', 'Sallys Cupcakes')
newShop.bakeBatch(12, 'chocolate', 'vanilla', 4);

newShop.sellCupcake();
newShop.sellCupcake();
newShop.sellCupcake();

console.log(newShop.cash)

function Fan (diameter, amps){
    this.diameter = diameter;
    this.amps = amps;
}

let myFan = new Fan(12, 150);

let current_datetime = new Date()
console.log(current_datetime.toString())


let monthText = function {
    if monthText
}
