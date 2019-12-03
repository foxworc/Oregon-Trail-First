function Traveler (name) {
    this.name = name;
    this.food = 1; 
    this.isHealthy = true;
}

function Wagon (capacity) {
    this.capacity = capacity;
    this.passengerlist = [];
}



Traveler.prototype.hunt = function(){
    this.food += 2
 }


 Traveler.prototype.eat = function(){
     if (this.food >= 1){
         this.food -= 1
     } else {
         this.isHealthy = false
     }
 }


 Wagon.prototype.getAvailableSeatCount =function(){
    return this.capacity - this.passengerlist.length

 }

 Wagon.prototype.join = function(traveler){
    if (this.capacity > this.passengerlist.length) {
        this.passengerlist.push(traveler)
    }
 }
 Wagon.prototype.shouldQuarantine = function(){
    for (let i = 0; i< this.passengerlist.length; i++){
        if (this.passengerlist[i].isHealthy===false){
            return true
        }
    } 
    return false
 }


 Wagon.prototype.totalFood = function(){
     let result = 0
    for (let i = 0; i< this.passengerlist.length; i++){
       result = result + this.passengerlist[i].food
    }
    return result
 }


    // loop throuugh this.passengerlist and check if each passenger is healthy
    // if a passenger is unhealthy, return true
    // if we make it through all the passengers, then return false

// var i;
// for (i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }
 


//  if (hour < 18) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }
 

// Traveler.prototype.hunt()
// Increase the traveler's food by 2.

// Traveler.prototype.eat()
// Consumes 1 unit of the traveler's food. If the traveler doesn't have any food to eat, the traveler is no longer healthy.

// Wagon.prototype.getAvailableSeatCount()
// Return the number of empty seats, determined by the capacity set when the wagon was created, compared to the
// number of passengers currently on board.

// Wagon.prototype.join(traveler)
// Add the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.

// Wagon.prototype.shouldQuarantine()
// Return true if there is at least one unhealthy person in the wagon. Return false if not.

// Wagon.prototype.totalFood()
// Return the total amount of food among all occupants of the wagon.





// function Dog (name, breed, isGoodBoy) {
//     this.name = name;
//     this.breed = breed;
//     this.isGoodBoy = isGoodBoy;
// }
// Dog.prototype.sit = function () {
//     // sitting code here
// }
// Dog.prototype.fetch = function () {
//     // fetching code here
// }

// Create a wagon that can hold 2 people
let wagon = new Wagon(2);
// Create three travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
wagon.join(juan);
wagon.join(maude); // There isn't room for her!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
henrietta.hunt(); // get more food
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);