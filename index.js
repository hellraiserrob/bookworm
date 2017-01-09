/**
 * TODO
 * 1 - Populate from dynamic data source
 * 2 - Provide access to NYT bestsellers list via NYT API
 */

'use strict';

const Alexa = require('alexa-sdk');
const BOOKS = require('./books.js').books;
const GENRES = require('./books.js').genres;

const APP_ID = "amzn1.echo-sdk-ams.app.394399230561";
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

/** 
 * get a random book by genre
 */
const getByGenre = genreName => {

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


/**
 * get a specific book by title
 */
const getByTitle = (title) => {
    
    let books = BOOKS.filter((book)=>{
        return (book.title.toLowerCase() === title.toLowerCase()) ? true : false;

    });
    if(books.length === 1){
        return books[0];
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
        var speechOutput = "Here's your book: " + randomBook.title + " by " + randomBook.author;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME + ' - Random Book', speechOutput)
    },
    'GetBookByGenreIntent': function () {
        
        let genre = this.event.request.intent.slots.genre.value;
        this.emit('GetBookByGenre', genre);

    },
    'GetBookByGenre': function (genre) {
        
        let speechOutput = '';
        let specificGenre = getByGenre(genre);

        if(specificGenre !== null){
            speechOutput = `How about ${specificGenre.title}, by ${specificGenre.author}?`;
        }
        else {
            speechOutput = `Sorry, I couldn't find a ${genre} book`;
        }

        this.emit(':tellWithCard', speechOutput, SKILL_NAME + ' -' + genre + ' Book' , speechOutput)
    },

    'GetBookSynopsisIntent': function () {
        
        let title = this.event.request.intent.slots.title.value;
        this.emit('GetBookSynopsis', title);

    },
    'GetBookSynopsis': function (title) {
        
        let speechOutput = '';
        let specificTitle = getByTitle(title);

        if(specificTitle !== null){
            speechOutput = `${specificTitle.synopsis}`;
        }
        else {
            speechOutput = `Sorry, I couldn't find ${title}`;
        }

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, speechOutput)
    },


    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say alexa ask bookworm for a book";
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











