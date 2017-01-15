'use strict';

const rp = require('request-promise');

const apiKey = process.env.NYTApiKey;
const apiBaseUrl = 'https://api.nytimes.com/svc/books/v3/';
const apiQs = {
    'api-key': apiKey
}

/** 
 * return api request options
 */
const getOptions = (route, params) => {

    let qs = Object.assign(apiQs, params);

    return {
        url: apiBaseUrl + route,
        qs: qs
    }

}

/** 
 * get a list of nyt bestsellers
 */
const getBestsellers = (url, params) => {

    let options = (getOptions(url, params));

    return rp(options)
    .catch((err) => {
        console.log(err);
    });

}

/** 
 * construct sentence for nyt bestsellers
 */
const getBestsellerWords = (books, total) => {

    let reducedBooks = books.splice(0,total)
    let speechOutput = `\nThe top ${total} books in the bestseller list.\n\n`

    reducedBooks.forEach(book => {
      speechOutput += `${book.rank}. ${book.book_details[0].title} by ${book.book_details[0].author}\n`
    })

    return speechOutput;
    
}


module.exports = {
    getBestsellers: getBestsellers,
    getBestsellerWords: getBestsellerWords
}