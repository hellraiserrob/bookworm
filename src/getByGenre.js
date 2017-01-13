'use strict';

const getRandomNumber = require('./utils.js').getRandomNumber;

/** 
 * get a random book by genre
 */
module.exports = (BOOKS, GENRES, genreName) => {

    let books = BOOKS.filter(book => {
        
        let genre = GENRES.filter((g) => {
            return (book.genreId === g.id) ? true: false;   
        });

        return (genreName.toLowerCase() === genre[0].name.toLowerCase()) ? true: false;

    });

    if(books.length){
        let randomIndex = getRandomNumber(1, books.length);
        return books[randomIndex-1];
    }

    return null;

}