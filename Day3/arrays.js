// ARRAYS
let movies = ['Caddyshack', 'Interstellar', 'Scarface'];
let firstMovie = movies[1];


// add elements to the end of an array
movies.push('Trading Places', 'Antitrust');

// add to the front of an array
movies.unshift('Star Wars');

// remove a single element from the end of an array
let movie = movies.pop();

// remove from the front of an array
movie = movies.shift();

// splice has a syntax of: array.splice(start, deleteCount, newItem1, newItem2...)

// movies => [ 'Caddyshack', 'Interstellar', 'Scarface', 'Trading Places' ]
let removedMovies = movies.splice(3, 1, 'Spaceballs', 'Alien');
// movies => [ 'Caddyshack', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien' ]
removedMovies = movies.splice(0, 3);
// movies => [ 'Spaceballs', 'Alien' ]
removedMovies = movies.splice(1, 0, 'The Sting');
// removedMovies => []
// movies => [ 'Spaceballs', 'The Sting', 'Alien' ]



// Iterate Over All of the Elements in an Array
movies.forEach((movie) => {
    console.log(movie, "is cool")
});
movies.forEach((movie) => {
    if (movie.length >= 6) {
        console.log(movie, "is long")
    }
});

movies.forEach(function (movie, idx) {
    console.log(idx + ') ' + movie);
});

for (let movie of movies) {
    if (movie === 'The Last Airbender') break;
    console.log(movie);
}


// create a copy of all, or part, of an array

// movies => [ 'Spaceballs', 'The Sting', 'Alien' ]
let lastTwoMovies = movies.slice(1, 3); // ['The Sting, 'Alien']


// copy an entire array using the ...
// movies => [ 'Spaceballs', 'The Sting', 'Alien' ]
let moviesCopy = [...movies];
console.log(movies);