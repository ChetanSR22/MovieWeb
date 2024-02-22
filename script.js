const apiKey = '342a50e0'; // Get your API key from http://www.omdbapi.com/

function searchMovies() {
    const searchInput = document.getElementById('searchInput').value;

    // Fetch data from OMDB API
    fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.Search);
        })
        .catch(error => console.error('Error:', error));
}

function displayMovies(movies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = ''; // Clear previous results

    if (!movies) {
        movieList.innerHTML = '<p>No results found.</p>';
        return;
    }

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');

        const title = movie.Title;
        const year = movie.Year;
        const poster = movie.Poster;

        movieItem.innerHTML = `
            <h2>${title} (${year})</h2>
            <img src="${poster}" alt="${title} poster">
        `;

        movieList.appendChild(movieItem);
    });
}
