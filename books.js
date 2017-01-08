const BOOKS = [{
    title: 'Starship Troopers',
    genreId: 33,
    published: 1959,
    author: 'Robert A. Heinlein'
},{
    title: 'The Moon Is a Harsh Mistress',
    genreId: 33,
    published: 1966,
    author: 'Robert A. Heinlein'
},{
    title: 'Book 3',
    genreId: 2,
    published: 2009,
    author: 'Jane Smith'
}];

// const GENRES = [{
//     name: 'Science Fiction',
//     id: 1
// },{
//     name: 'Romance',
//     id: 2
// }];




const GENRES = [
    { name: 'Art', id: 1},
    { name: 'Biography', id: 2},
    { name: 'Business', id: 3},
    { name: 'Chick Lit', id: 4},
    { name: 'Children\'s', id: 5},
    { name: 'Christian', id: 6},
    { name: 'Classics', id: 7},
    { name: 'Comics', id: 8},
    { name: 'Contemporary', id: 9},
    { name: 'Cookbooks', id: 10},
    { name: 'Crime', id: 11},
    { name: 'Ebooks', id: 12},
    { name: 'Fantasy', id: 13},
    { name: 'Fiction', id: 14},
    { name: 'Gay and Lesbian', id: 15},
    { name: 'Graphic Novels', id: 16},
    { name: 'Historical Fiction', id: 17},
    { name: 'History', id: 18},
    { name: 'Horror', id: 19},
    { name: 'Humor and Comedy', id: 20},
    { name: 'Manga', id: 21},
    { name: 'Memoir', id: 22},
    { name: 'Music', id: 23},
    { name: 'Mystery', id: 24},
    { name: 'Nonfiction', id: 25},
    { name: 'Paranormal', id: 26},
    { name: 'Philosophy', id: 27},
    { name: 'Poetry', id: 28},
    { name: 'Psychology', id: 29},
    { name: 'Religion', id: 30},
    { name: 'Romance', id: 31},
    { name: 'Science', id: 32},
    { name: 'Science Fiction', id: 33},
    { name: 'Self Help', id: 34},
    { name: 'Suspense', id: 35},
    { name: 'Spirituality', id: 36},
    { name: 'Sports', id: 37},
    { name: 'Thriller', id: 38},
    { name: 'Travel', id: 39},
    { name: 'Young Adult', id: 40}
];



module.exports = {
    books: BOOKS,
    genres: GENRES
};