/* 
 Create a function that:
 *   **Takes** an array of animals
 *   Each animal has propeties `name`, `species` and `legsCount`
 *   **groups** the animals by `species`
 *   the groups are sorted by `species` descending
 *   **sorts** them ascending by `legsCount`
 *	if two animals have the same number of legs sort them by name
 *   **prints** them to the console in the format:

 ```
 ----------- (number of dashes is equal to the length of the GROUP_1_NAME + 1)
 GROUP_1_NAME:
 ----------- (number of dashes is equal to the length of the GROUP_1_NAME + 1)
 NAME has LEGS_COUNT legs //for the first animal in group 1
 NAME has LEGS_COUNT legs //for the second animal in group 1
 ----------- (number of dashes is equal to the length of the GROUP_2_NAME + 1)
 GROUP_2_NAME:
 ----------- (number of dashes is equal to the length of the GROUP_2_NAME + 1)
 NAME has LEGS_COUNT legs //for the first animal in the group 2
 NAME has LEGS_COUNT legs //for the second animal in the group 2
 NAME has LEGS_COUNT legs //for the third animal in the group 2
 NAME has LEGS_COUNT legs //for the fourth animal in the group 2
 ```
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

function solve() {
    return function (animals) {
        function drawHeader(groupName) {
            console.log(Array(groupName.length + 2).join('-'));
            console.log(groupName + ':');
            console.log(Array(groupName.length + 2).join('-'));
        }

        function sortByName(animals) {
            var i,
                len,
                exchangeVar;

            for (i = 0, len = animals.length; i < len - 1; i += 1) {
                if (animals[i].legsCount === animals[i + 1].legsCount) {
                    if (animals[i].name > animals[i + 1].name) {
                        exchangeVar = animals[i];
                        animals[i] = animals[i + 1];
                        animals[i + 1] = exchangeVar;
                    }
                }
            }
        }

        function sortAnimalsInGroups(animals) {
            var sorted = _.sortBy(animals, 'legsCount');

            sortByName(animals);
            //sortByName(sorted);

            return sorted;
        }

        var grouped = _.chain(animals)
            .groupBy('species')
            .sortBy('species')
            .reverse()
            .value();

        var sorted = _.chain(grouped)
            .sortBy(function (group) {
                return sortAnimalsInGroups(group);
            })
            .each(function (group) {
                drawHeader(group[0].species);

                _.each(group, function (animal) {
                    console.log(animal.name + ' has ' + animal.legsCount + ' legs');
                })
            });
    };
}

//solve()(students);

module.exports = solve;
