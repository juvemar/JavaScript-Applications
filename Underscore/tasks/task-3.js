/* 
 Create a function that:
 *   Takes an array of students
 *   Each student has:
 *   `firstName`, `lastName` and `age` properties
 *   Array of decimal numbers representing the marks
 *   **finds** the student with highest average mark (there will be only one)
 *   **prints** to the console  'FOUND_STUDENT_FULLNAME has an average score of MARK_OF_THE_STUDENT'
 *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
 *   **Use underscore.js for all operations**
 */

var _ = require('underscore');

var students = [
    {
        firstName: 'Stoyan',
        lastName: 'Goshev',
        age: 22,
        marks: [2, 5, 6, 3]
    }, {
        firstName: 'Petran',
        lastName: 'Toshev',
        age: 15,
        marks: [4, 3, 4, 5]
    }, {
        firstName: 'Jorj',
        lastName: 'Stone',
        age: 19,
        marks: [2, 6, 6, 3]
    }];


function solve() {
    return function (students) {
        var sorted = _.chain(students)
            .map(function (student) {
                var average = 0;
                student.marks.forEach(function (mark) {
                    average += mark;
                });
                average /= student.marks.length;
                student.averageMark = average;

                student.fullName = student.firstName + ' ' + student.lastName;

                return student;
            })
            .sortBy('averageMark')
            .last()
            .value();

        console.log(sorted.fullName + ' has an average score of ' + sorted.averageMark);
    };
}

//solve()(students);

module.exports = solve;
