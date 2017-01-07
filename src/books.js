const BOOKS = [{
    title: 'Book 1',
    genreId: 1,
    published: 2010,
    author: 'John Smith'
},{
    title: 'Book 2',
    genreId: 1,
    published: 2011,
    author: 'John Smith'
},{
    title: 'Book 3',
    genreId: 2,
    published: 2009,
    author: 'Jane Smith'
}];

const GENRES = [{
    name: 'Science Fiction',
    id: 1
},{
    name: 'Romance',
    id: 2
}];




module.exports = {
    books: BOOKS,
    genres: GENRES
};