import React, {useState} from 'react';

function MovieList(){
        const [movies, setMovies] = useState([{title: "SkyScrapper", year: "2017", category: "Action"},
                                                {title: "Fear Street:Prom Queen", year: "2025", category: "Horror"},
                                                {title: "A widow's game", year: "2025", category: "Mystery"},
                                                {title: "PayCheck", year: "2025", category:"Sci-Fi"},
                                                {title: "Exterritorial", year: "2025", category: "Thriller"},
                                            
                                            ]); 
        const [movieTitle, setMovieTitle] = useState("");
        const [movieYear, setMovieYear] = useState("");
        const [movieCategory, setMovieCategory] = useState("");
    

        function addMovie(){
            const newMovie ={title: movieTitle, year: movieYear, category: movieCategory};
            setMovies(m => [...m, newMovie]);
            setMovieTitle("");
            setMovieCategory("");
            setMovieYear("");

        }
        

        function changeTitle(e){
            setMovieTitle(e.target.value);
        }

        function changeYear(e){
            setMovieYear(e.target.value);

        }
        function changeCategory(e){
            setMovieCategory(e.target.value);
        }
    
    

            return (
              <>
                <div className="bg-gray-800 p-6 m-6 text-white max-w-2xl mx-auto rounded-xl shadow-lg">
                  <h1 className="text-center text-5xl font-bold italic mb-8">Movies</h1>
                  <div className="flex flex-col items-center mb-8 space-y-4">
                    <input
                      className="bg-gray-700 w-full rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                      type="text"
                      placeholder="Enter Movie Title"
                      value={movieTitle}
                      onChange={changeTitle}
                    />
                    <input
                      className="bg-gray-700 w-full rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                      type="number"
                      placeholder="Enter year of release"
                      value={movieYear}
                      onChange={changeYear}
                    />
                    <select
                      className="bg-gray-700 w-full rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                      value={movieCategory}
                      onChange={changeCategory}
                    >
                      <option value="">Select Category</option>
                      <option value="Anime">Anime</option>
                      <option value="Action">Action</option>
                      <option value="Drama">Drama</option>
                      <option value="Horror">Horror</option>
                      <option value="Sci-Fi">Sci-Fi</option>
                      <option value="Thriller">Thriller</option>
                      <option value="Comedy">Comedy</option>
                      <option value="Fantasy">Fantasy</option>
                    </select>
                    <button
                      className="bg-red-700 py-2 px-8 rounded-lg hover:bg-red-600 transition-colors font-semibold shadow"
                      onClick={addMovie}
                    >
                      Add movie
                    </button>
                  </div>
                  <ul className="divide-y divide-gray-600 bg-gray-700 rounded-lg shadow p-4">
                    {movies.map((movie, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between py-4 px-2 hover:bg-gray-600 rounded transition"
                      >
                        <div>
                          <h4 className="text-lg font-semibold">{movie.title}</h4>
                        </div>
                        <div className="flex items-center space-x-6 text-gray-300">
                          <span className="">{movie.year}</span>
                          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            {movie.category}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )
}

     
export default MovieList;