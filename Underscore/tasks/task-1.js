/*
 Create a function that:
 *   Takes an array of students
 *   Each student has a `firstName` and `lastName` properties
 *   **Finds** all students whose `firstName` is before their `lastName` alphabetically
 *   Then **sorts** them in descending order by fullname
 *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
 *   Then **prints** the fullname of founded students to the console
 *   **Use underscore.js for all operations**
 */

var _ = require('underscore');

var students = [
    {
        firstName: 'Stoyan',
        lastName: 'Goshev'
    }, {
        firstName: 'Petran',
        lastName: 'Toshev'
    }, {
        firstName: 'Jorj',
        lastName: 'Stone'
    }];

function solve() {
    return function (students) {
        var sorted = _.chain(students)
            .filter(function (student) {
                return student.firstName < student.lastName;
            })
            .sortBy(function (student) {
                return student.firstName + ' ' + student.lastName;
            })
            .reverse()
            .each(function (student) {
                console.log(student.firstName + ' ' + student.lastName);
            });
        //console.log(sorted._wrapped);
    };

}

//var slv = solve();
//slv(students);

module.exports = solve;