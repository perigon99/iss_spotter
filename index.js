const apiLink = 'https://api.ipify.org?format=json';
const myIp = "142.117.175.64";
// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);

// });

// fetchCoordsByIP(myIp,(err, lat, long) => {
//   if (err) {
//         console.log("It didn't work!" , err);
//         return;
//       }
    
//       console.log('It worked! my lat is:' , lat , "longitude is", long);
// }
// )
// lat = 45.4995;
// long = -73.5848;
// fetchISSFlyOverTimes(lat, long, (err, result) => {
//   if (err) {
//     console.log("It didn't work!" , err);
//     return;
//   }

//   console.log('It worked! Returned flyover times:', result);

// });
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});