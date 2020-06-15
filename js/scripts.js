///Business Logic

//Holds array of places
function DestinationHolder () {
  this.locations = [];
  this.currentId = 0;
}

DestinationHolder.prototype.addLocation = function(location) {
  location.id = this.assignId();
  this.locations.push(location);
}

DestinationHolder.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}

// places constructor function
function Location(location, landmarks, timeOfYear, notes, why, bestFood, year) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  this.why = why;
  this.bestFood = bestFood;
  this.year= year;
}

let destinationHolder = new DestinationHolder();
let places1 = new Location("UP Michigan", "Lake Superior", "Summer", "Lots of great places to camp", "The U-P is BEAUTIFUL!!!", "Bagels from a local food stand", "2020");
let places2 = new Location("Japan", "Kiyomizu Temple", "Spring", "Check out the Cherry Blossoms", "Study Japanese", "Okonomiyaki", "2019");
let places3 = new Location("Greece", "Lesbos Island", "Summer/Fall", "Increidble views", "Greece has a ton of history and beautiful sights", "Great Feta Cheese!", "2018");
destinationHolder.addLocation(places1);
destinationHolder.addLocation(places2);
destinationHolder.addLocation(places3);

console.log(places1);
Location.prototype.AddTimeSpent = function(time) {
  return this.TimeSpent = time; 
};

places1.AddTimeSpent("5 Days");
//Add new parameter



//Delete place
//Search by date

/*
Place.protoype.whenTravelled = function (year){
  if (this.year === "2020"){
    console.log(places1).year;
  };
  // for (let i = 0 ; i<Place.length)
}

places1.whenTravelled("2020");

*/
console.log (places1);
// let places1 = {
//   location: "UP Michigan",
//   landmarks: "Lake Superior",
//   timeOfYear:"Summer",
//   notes:"Lots of great places to camp",
//   why:"The U-P is BEAUTIFUL!!!",
//   bestFood: "Bagels from a local food stand"
// }
// let places2 = {
//   location: "Japan",
//   landmarks: "Kiyomizu Temple",
//   timeOfYear:"Spring",
//   notes:"Check out the Cherry Blossoms",
//   why:"Study Japanese",
//   bestFood: "Okonomiyaki"
// }
// let places3 = {
//   location: "Greece",
//   landmarks: "Lesbos Island",
//   timeOfYear:"Summer/Fall",
//   notes:"Increidble views",
//   why:"Greece has a ton of history and beautiful sights",
//   bestFood: "Great Feta Cheese!"
// }





//User-Interface Logic
$(document).ready(function() {

});



// function printObject(destination) {
//   let output = '';
//   for (let i=0; i<places.length; i++) {
//     output += <h2>places.location</h2> + <p>places.landmarks</p> ;
//   }
  
// }

