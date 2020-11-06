let car1={
    "make":"Honda",
    "year":1998,
    "model1":"Civic"
}
let car2={
    "year":2000,
    "model1":"Accord"
}
let ca5={
    "year":2020,
    "model1":"Ferarry"
};

class Car {
    constructor(make,model,year){
        if(year>2021){
            console.log("Are you sure about year " + make+model+ " it seems littl different");

        } else{
            this.year=year;
        }
        this.make=make;
        this.year=year;
        this.model=model;
        this.currentFuelGallons=0;
        this.registeredDate=new Date(Date.now());

    }
    checkFuel(){
        console.log(`The car ${this.make} ${this.model}has ${this.currentFuelGallons} of gallons of gas left in the tank.`);
    }
    refuel(gallons){
        if(typeof gallons==="number"){
            if(gallons>this.fuelCapacity-this.currentFuelGallons){
                console.log("There is enaught  room in tank instead.");
                this.currentFuelGallons=this.fuelCapacity
            this.currentFuelGallons=this.currentFuelGallons+gallons;
            console.log("Refuel successfu,added"+gallons+"to the tank.");
        }else {
            console.log("Refueling needs a valid number!");
        }
    }
}
let car3=new Car("tesla","X",2016);
let car4=new Car("Chevy","Bolt",2016);
let car6=new Car("Toyota","Prius",2014);
car4.checkFuel();
car3.checkFuel();

car4.refuel(200);
car3.checkFuel();


console.log("The car"+car4.make+car4.model+"has"+car4.currentFuelGallons+"gallons of gas left.");

//console.log(car1,car2);
//console.log(car3,car4);
