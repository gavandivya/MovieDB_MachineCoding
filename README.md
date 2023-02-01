## Movie listing website 

API: https://developers.themoviedb.org/3

Key: ***************

Sample request - Popular movies list: https://api.themoviedb.org/3/movie/popular?api_key=***************

Functionality
--

### Read API and show a grid/list of the latest movies

Docs: https://developers.themoviedb.org/3/movies/get-popular-movies

Request: https://api.themoviedb.org/3/movie/popular?api_key=***************

### Clicking on a movie should take me to a new page with movie info 

Docs: https://developers.themoviedb.org/3/movies/get-movie-details

Request: https://api.themoviedb.org/3/movie/315162?api_key=***************&language=en-US

### Nested comments under the movie info (can prepare your own data)

Tag-based filtering for genres / select field filter on the Homepage

Movies have genre IDs as an integer array. 

### The following API has a mapping of genre ID to name. Filter by matching:

Docs: https://developers.themoviedb.org/3/genres/get-movie-list

API: https://api.themoviedb.org/3/genre/movie/list?api_key=***************

Add a search box and search according to Movie title

