/*
Create a function that:
*   Takes an array of students
    *   Each student has a `firstName`, `lastName` and `age` properties
*   **finds** the students whose age is between 18 and 24
*   **prints**  the fullname of found students, sorted lexicographically ascending
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

var _ = require('underscore');

var students = [
  {
    firstName: 'Stoyan',
    lastName: 'Goshev',
    age: 22
  }, {
    firstName: 'Petran',
    lastName: 'Toshev',
    age: 15
  }, {
    firstName: 'Jorj',
    lastName: 'Stone',
    age: 19
  }];

function solve(){
  return function (students) {
    var sorted = _.chain(students)
        .filter(function (student) {
          return student.age >= 18 && student.age <= 24;
        })
        .sortBy(function (student) {
          return student.firstName + ' ' + student.lastName;
        })
        .each(function (student) {
          console.log(student.firstName + ' ' + student.lastName);
        });
  };
}

module.exports = solve;
