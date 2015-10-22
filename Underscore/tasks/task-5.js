/* 
Create a function that:
*   **Takes** an array of animals
    *   Each animal has propeties `name`, `species` and `legsCount`
*   **finds** and **prints** the total number of legs to the console in the format:
    *   "Total number of legs: TOTAL_NUMBER_OF_LEGS"
*   **Use underscore.js for all operations**
*/

var _ = require('underscore');

var students = [
  {
    name: 'Stoyan',
    species: 'dog',
    legsCount: 4
  }, {
    name: 'Petran',
    species: 'chicken',
    legsCount: 2
  }, {
    name: 'Jorj',
    species: 'crab',
    legsCount: 6
  }, {
    name: 'Petio',
    species: 'chicken',
    legsCount: 2
  }, {
    name: 'Sashko',
    species: 'crab',
    legsCount: 6
  }];

function solve(){
  return function (animals) {
    var totalLegs = 0;
    var countLegs = _.chain(animals)
        .each(function (animal) {
      totalLegs += animal.legsCount;
    });

    console.log('Total number of legs: ' + totalLegs);
  };
}

module.exports = solve;
