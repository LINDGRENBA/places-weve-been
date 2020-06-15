///Business Logic

// places constructor function
function Place(location, landmarks, timeOfYear, notes, why, bestFood) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  this.why = why;
  this.bestFood = bestFood;
}

let places1 = new Place("UP Michigan", "Lake Superior", "Summer", "Lots of great places to camp", "The U-P is BEAUTIFUL!!!", "Bagels from a local food stand");

let places2 = new Place("Japan", "Kiyomizu Temple", "Spring", "Check out the Cherry Blossoms", "Study Japanese", "Okonomiyaki");

let places3 = new Place("Greece", "Lesbos Island", "Summer/Fall", "Increidble views", "Greece has a ton of history and beautiful sights", "Great Feta Cheese!");

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

