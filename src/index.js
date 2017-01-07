/**
 * TODO
 * Populate from dynamic data source
 */

'use strict';

const Alexa = require('alexa-sdk');
const BOOKS = require('./books.js').books;
const GENRES = require('./books.js').genres;
const APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
const SKILL_NAME = 'Bookworm';

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};


/**
 * generate random number
 */
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

/** get a random book by genre */
const getByGenre = genreName => {

    let books = BOOKS.filter(book => {
        
        let genre = GENRES.filter((g) => {
            return (book.genreId === g.id) ? true: false;   
        });

        return (genreName === genre[0].name) ? true: false;

    });

    if(books.length){
        let randomIndex = getRandomNumber(1, books.length);
        return books[randomIndex-1];
    }

    return null;

}


var handlers = {
    'LaunchRequest': function () {
        this.emit('GetBook');
    },
    'GetNewBookIntent': function () {
        this.emit('GetBook');
    },
    'GetBook': function () {

        let randomIndex = getRandomNumber(1, BOOKS.length);
        let randomBook = BOOKS[randomIndex-1];

        // Create speech output
        var speechOutput = "Here's your book: " + randomBook.name + " by " + randomBook.author;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomBook.name)
    },
    'GetBookByGenreIntent': function () {
        
        let genre = this.event.request.intent.slots.genre.value;
        
        this.emit('GetBookByGenre', genre);
    },
    'GetBookByGenre': function (genre) {
        
        // Create speech output
        var speechOutput = "You asked for a specific genre: " + genre;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, 'secret')
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a book";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};





// const getByTitle = (title) => {
    
//     let books = BOOKS.filter((book)=>{
//         return (book.title === title) ? true : false;
//     });

//     if(books.length === 1){
//         return books[0];
//     }

//     return null;
// }





// let specificBook = getByTitle('Book 2');

// if(specificBook !== null){
//     console.log(`${specificBook.title} was published in ${specificBook.published}`);
// }
// else {
//     console.log('Exact book match not found');
// }


// //category

// let specificGenre = getByGenre('Romance');

// if(specificGenre !== null){
//     console.log(`How about ${specificGenre.title}?`);
// }
// else {
//     console.log('Exact category match not found');
// }











