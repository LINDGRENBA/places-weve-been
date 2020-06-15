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

DestinationHolder.prototype.findLocation = function(location) {
  for (let i=0; i< this.locations.length; i++) {
    if(this.locations[i].location === location) {
      return this.locations[i];
    }
  };
  return false;
}

DestinationHolder.prototype.whenTravelled = function (year){
  for (let i = 0 ; i<this.locations.length;i++ ){
    if (this.locations[i].year == year) {
      alert (this.locations[i].location);
    }
  };
  return false;
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


Location.prototype.AddTimeSpent = function(time) {
  return this.TimeSpent = time; 
};

places1.AddTimeSpent("5 Days");




//  DestinationHolder.prototype.whenTravelled = function (year){
//    for (let i = 0 ; i<this.locations.length;i++ ){
//      if (this.locations[i].year == year) {
//        alert (this.locations[i]);
//     }
//   };
//   return false;
//   }
  
  // DestinationHolder.prototype.findLocation = function(location) {
  //   for (let i=0; i< this.locations.length; i++) {
  //     if(this.locations[i].location === location) {
  //       return this.locations[i];
  //     }
  //   };
  //   return false;
  // }
  destinationHolder.whenTravelled("2018");


