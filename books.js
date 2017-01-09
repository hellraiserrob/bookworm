const BOOKS = [{
    title: 'Starship Troopers',
    genreId: 33,
    published: 1959,
    author: 'Robert A. Heinlein',
    synopsis: 'In one of Robert Heinlein\'s most controversial bestsellers, a recruit of the future goes through the toughest boot camp in the Universe--and into battle with the Terran Mobile Infantry against mankind\'s most frightening enemy.'
},{
    title: 'The Moon is a Harsh Mistress',
    genreId: 33,
    published: 1966,
    author: 'Robert A. Heinlein',
    synopsis: 'It is the year 2076, and the Moon is a penal colony for the rebellious and the unwanted of Earth. The exiles have created a libertarian society in order to survive in their harsh and unforgiving environment, their motto being TANSTAAFL: \"There ain\'t no such thing as a free lunch\".'
},{
    title: 'To Kill a Mockingbird',
    genreId: 7,
    published: 1960,
    author: 'Harper Lee',
    synopsis: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960.'
},{
    title: 'Brave New World',
    genreId: 7,
    published: 1932,
    author: 'Aldous Huxley',
    synopsis: 'Far in the future, the World Controllers have created the ideal society. Through clever use of genetic engineering, brainwashing and recreational sex and drugs, all its members are happy consumers.'
},{
    title: 'Lord of the Flies',
    genreId: 7,
    published: 1954,
    author: 'William Golding',
    synopsis: 'When a plane crashes on a remote island, a small group of schoolboys are the sole survivors. From the prophetic Simon and virtuous Ralph to the lovable Piggy and brutish Jack, each of the boys attempts to establish control as the reality - and brutal savagery - of their situation sets in.'
},{
    title: 'American Gods',
    genreId: 13,
    published: 2001,
    author: 'Neil Gaiman',
    synopsis: 'Days before his release from prison, Shadow\'s wife, Laura, dies in a mysterious car crash. Numbly, he makes his way back home. On the plane, he encounters the enigmatic Mr Wednesday, who claims to be a refugee from a distant war, a former god and the king of America.'
},{
    title: 'World War Z',
    genreId: 19,
    published: 2006,
    author: 'Max Brooks',
    synopsis: 'It began with rumours from China about another pandemic. Then the cases started to multiply and what had looked like the stirrings of a criminal underclass, even the beginnings of a revolution, soon revealed itself to be much, much worse.'
},{
    title: 'The Hunger Games',
    genreId: 40,
    published: 2008,
    author: 'Suzanne Collins',
    synopsis: 'Panem is split up into 12 districts. Each year, every district is forced to randomly choose two tributes one girl and one boy to fight in the annual Hunger Games. A fight to the death on live television.'
},{
    title: 'The Color of Magic',
    genreId: 13,
    published: 1983,
    author: 'Terry Pratchett',
    synopsis: 'On a world supported on the back of a giant turtle (sex unknown), a gleeful, explosive, wickedly eccentric expedition sets out.'
},{
    title: 'American Psycho',
    genreId: 19,
    published: 1991,
    author: 'Bret Easton Ellis',
    synopsis: 'Patrick Bateman is twenty-six and he works on Wall Street, he is handsome, sophisticated, charming and intelligent. He is also a psychopath.'
},{
    title: 'Foundation',
    genreId: 33,
    published: 1951,
    author: 'Isaac Asimov',
    synopsis: 'For twelve thousand years the Galactic Empire has ruled supreme. Now it is dying. But only Hari Seldon, creator of the revolutionary science of psychohistory, can see into the future'
},{
    title: 'The Great Gatsby',
    genreId: 7,
    published: 1925,
    author: ' F.Scott Fitzgerald',
    synopsis: 'The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s.'
},{
    title: 'The Forever War',
    genreId: 33,
    published: 1974,
    author: 'Joe Haldeman',
    synopsis: 'The Earth\'s leaders have drawn a line in the interstellar sand—despite the fact that the fierce alien enemy that they would oppose is inscrutable, unconquerable, and very far away.'
},{
    title: 'The Boys from Brazil',
    genreId: 38,
    published: 1976,
    author: 'Ira Levin',
    synopsis: 'Alive and hiding in South America, the fiendish Nazi Dr. Josef Mengele gathers a group of former colleagues for a horrifying project—the creation of the Fourth Reich. Barry Kohler, a young investigative journalist, gets wind of the project and informs famed Nazi hunter Ezra Lieberman'
},{
    title: 'Dune',
    genreId: 33,
    published: 1965,
    author: 'Frank Herbert',
    synopsis: 'Set in the far future amidst a sprawling feudal interstellar empire where planetary dynasties are controlled by noble houses that owe an allegiance to the imperial House Corrino, Dune tells the story of young Paul Atreides (the heir apparent to Duke Leto Atreides and heir of House Atreides) as he and his family accept control of the desert planet Arrakis'
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