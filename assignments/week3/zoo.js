class Animal{
    constructor(alive){
        this.living=alive;
    }
}

class Mammal extends Animal{
    constructor(alive,eyeColor) {
        super();
        this.tail=1;
        this.type="mammal";
        this.eyes=2;
        this.eyeColor=blue;
    }
    eat() {
if("name" in this){

        console.log(this.name + " eats some food.");
} else {
    console.log("Animal eats some food");
    }
    }
    breed(partner){
        if(partner.constructor.name== this.constructor.name){
            console.log("Good job");

            const eyeInheritance=Math.random()*2;
            eyeInheritance=Math.floor(eyeInheritance);
            if(eyeInheritance==0){
                childEyeColor=this.eyeColor;
            } else{
                childEyeColor=partner.eyeColor

            }

            let child=new this.constructor(childName,true,childEyeColor);
            console.log(child);

        }
        return child;
    }
}
class Dog extends Mammal{
    constructor(dogName,alive){
        //This function runs the constructor of the class we are inheriting,it is important to run it first before any other lines of our dog constructor class.
        super(alive);
        this.legs=4;
        this.name=dogName;
        this.eyeColor;
    }
    bark(){
        console.log("woof woof");
    }
}
class Cat extends Mammal{
    constructor(catName,alive){
        super(alive);
        this.legs=4;
        this.name=catName;
    }
    meow(){
        console.log("meow");
    }
}
let animal1 =new Dog ("Banhar",true);
let animal2 =new Cat ("Boroo",true);
animal1.bark();
animal1.eat();
console.log(animal1.living);
animal2.eat();
animal2.meow();
console.log(animal2.living);

let dog1=new Dog("Banhar",true,"blue");
let dog2=new Dog("Shonhor",true,"brown");
let dog3=new Dog("Tuna",true,"green");

let newDog=dog2.breed(dog1,"Burged");
//let newDog=dog3.breed(dog2,"Irwes")

console.log(isNaN());
Math.random();
Math.round();
let myFirstNumber=new Number("10");
let number1=19;
console.log(myFirstNumber,number1);

let cat1=new Cat("sue",true,"blue");
let cat2=new Cat("cici",true,"brown");

let newcat1=cat1.breed(cat2,"Spot");

console.log(newCat1);


