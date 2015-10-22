/* 
 Create a function that:
 *   **Takes** a collection of books
 *   Each book has propeties `title` and `author`
 **  `author` is an object that has properties `firstName` and `lastName`
 *   **finds** the most popular author (the author with biggest number of books)
 *   **prints** the author to the console
 *	if there is more than one author print them all sorted in ascending order by fullname
 *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
 *   **Use underscore.js for all operations**
 */

var _ = require('underscore');

var books = [{
    title: 'The lambs',
    author: {
        firstName: 'Steven',
        lastName: 'King'
    }
}, {
    title: 'The seven kingdoms',
    author: {
        firstName: 'Shon',
        lastName: 'Bakens'
    }
}, {
    title: 'Good will hunting',
    author: {
        firstName: 'Jean',
        lastName: 'Dam'
    }
}, {
    title: 'Green street hools',
    author: {
        firstName: 'Many',
        lastName: 'Shilingam'
    }
}, {
    title: 'Green street hools second part',
    author: {
        firstName: 'Many',
        lastName: 'Shilingam'
    }
},{
    title: 'The other lambs',
    author: {
        firstName: 'Steven',
        lastName: 'King'
    }
}];

function solve() {
    return function (books) {
        var groupedByAuthors = _.chain(books)
            .map(function (book) {
                book.author.fullName = book.author.firstName + ' ' + book.author.lastName;
                book.authorName = book.author.fullName;
                return book;
            })
            .groupBy('authorName')
            .sortBy('length')
            .map(function (group) {
               return{
                   name: book.author.firstName + ' ' + book.author.lastName,
                   books: group.length
               };
            });

        var bestAuthorBooksCount = groupedByAuthors[0].length;

        var printAuthors = _.chain(groupedByAuthors)
            .filter(function (group) {
               return group.length === bestAuthorBooksCount;
            })
            .each(function (group) {
                console.log(group[0].author.fullName);
            });
    };
}

//solve()(books);

module.exports = solve;
