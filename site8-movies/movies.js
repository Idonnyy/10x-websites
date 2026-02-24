const movieList = document.getElementById("movieList");
const moviesListImages = document.getElementById("moviesListImages");
const movieName = document.getElementById("movieName");
const movieYear = document.getElementById("movieYear");
const movieGenre = document.getElementById("movieGenre");
const movieDescription = document.getElementById("movieDescription");
const movieImage = document.getElementById("movieImage");
const movieActors = document.getElementById("movieActors");

const movies = [
    {
        name: "The Dark Knight",
        year: 2008,
        genre: "Action / Crime / Drama",
        description: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
        image: "images/dark-knight.jpg",
        actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Gary Oldman"]
    },
    {
        name: "Inception",
        year: 2010,
        genre: "Sci-Fi / Action",
        description: "A thief who steals corporate secrets through dream-sharing technology is given a chance at redemption.",
        image: "images/inception.jpg",
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"]
    },
    {
        name: "Interstellar",
        year: 2014,
        genre: "Sci-Fi / Drama",
        description: "A team of explorers travel through a wormhole in space in an attempt to save humanity.",
        image: "images/interstellar.jpg",
        actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"]
    },
    {
        name: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        description: "Two imprisoned men bond over years, finding solace and redemption through acts of decency.",
        image: "images/shawshank.jpg",
        actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
        name: "Avengers: Endgame",
        year: 2019,
        genre: "Action / Adventure / Sci-Fi",
        description: "The Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
        image: "images/endgame.jpg",
        actors: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Chris Hemsworth"]
    }
];

if (movieList) {
    movies.forEach(movie => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = movie.name;
        a.href = "movie.html?name=" + movie.name.toLowerCase().replaceAll(" ", "");
        li.appendChild(a);
        movieList.appendChild(li);
    });
}

const params = new URLSearchParams(window.location.search);
const movieKey = params.get("name")?.toLowerCase().replaceAll(" ", "");

const movieData = movies.find(movie =>
    movie.name.toLowerCase().replaceAll(" ", "") === movieKey
);

if (movieData) {
    if (movieName) movieName.textContent = movieData.name;
    if (movieYear) movieYear.textContent = movieData.year;
    if (movieGenre) movieGenre.textContent = movieData.genre;
    if (movieDescription) movieDescription.textContent = movieData.description;
    if (movieImage) movieImage.src = movieData.image;

    if (movieActors) {
        movieActors.innerHTML = "";
        movieData.actors.forEach(actor => {
            const li = document.createElement("li");
            li.textContent = actor;
            movieActors.appendChild(li);
        });
    }
}