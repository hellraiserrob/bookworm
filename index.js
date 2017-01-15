/**
 * TODO
 * 1 - Populate from dynamic data source
 * 2 - Provide access to NYT bestsellers list via NYT API
 */

'use strict';

const Alexa = require('alexa-sdk');
const BOOKS = require('./books.js').books;
const GENRES = require('./books.js').genres;

const getRandomNumber = require('./src/utils.js').getRandomNumber;

const getByGenre = require('./src/getByGenre.js');
const getBestsellers = require('./src/bestsellers.js').getBestsellers;
const getBestsellerWords = require('./src/bestsellers.js').getBestsellerWords;

const APP_ID = "amzn1.echo-sdk-ams.app.394399230561";
const SKILL_NAME = 'My Bookworm';

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};


// getBestsellers('lists/names.json').then((resp) => {
//     let body = JSON.parse(resp);
//     console.log(body);
// });

getBestsellers('lists.json', {
    list: 'combined-print-and-e-book-nonfiction'
}).then((resp) => {
    
    let jsonReponse = JSON.parse(resp)
    let output = getBestsellerWords(jsonReponse.results, 500)

    console.log(output)

})


// let bestsellers = getBestsellers();
// console.log(bestsellers);



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

        this.emit(':tellWithCard', speechOutput, SKILL_NAME + ', random book', speechOutput)
    },
    'GetBookByGenreIntent': function () {
        
        let genre = this.event.request.intent.slots.genre.value;
        this.emit('GetBookByGenre', genre);

    },
    'GetBookByGenre': function (genre) {
        
        let speechOutput = '';
        let specificGenre = getByGenre(BOOKS, GENRES, genre);

        if(specificGenre !== null){
            speechOutput = `How about ${specificGenre.title}, by ${specificGenre.author}?`;
        }
        else {
            speechOutput = `Sorry, I couldn't find a ${genre} book`;
        }

        this.emit(':tellWithCard', speechOutput, SKILL_NAME + ', ' + genre + ' book' , speechOutput)
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

        this.emit(':tellWithCard', speechOutput, SKILL_NAME + ', ' + title + ' synopsis', speechOutput)
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







handlers.GetBook();