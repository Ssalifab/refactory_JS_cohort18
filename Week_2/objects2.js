// // car.name="fiat";
// // car.model="500";
// // car.weight=850;
// // car.color="white";

// let carName="rangeRover"
// let carModel="Vella";
// let carWeight=850;
// let engineName="V8"


// //Methods of car object
// let carStart=function(){
//     console.log("vroom");
// };

//declaring car object

let car={
 carName:"rangeRover",
 carModel:"Vella",
 carWeight:850,
 engineName:"turbo",

 start: function(){
    console.log("vroom")
 },
 drive: function(){
    console.log("car is moving")
 },
 brake: function(){
    console.log("Krrrrr...")
 },
 stop: function(){
    console.log("car has stopped")
 }
};

car.carName;
car.carModel;
car.carWeight;
car.engineName;

car.stop();
car.brake();
car.start();
car.start();

let farmer={
    name:"ssali",
    age:30,
    isRegistered:false,

    greetFarmer: function(){
        console.log("Welcome"+" "+this.name+" "+ " ")
    },
    chickRequest: function(quantity){
        console.log(this.name + " " + "requested for"+" "+ quantity+ " "+"chicks")
    }
};
console.log(farmer.age)
farmer.greetFarmer();
farmer.chickRequest(900);