import React, {useState} from 'react';

function MovieList(){
        const [movies, setMovies] = useState([{title: "Inception", year: "2010", category: "Sci-Fi"},
                                                {title: "The Godfather", year: "1972", category: "Crime"},
                                                {title: "The Dark Knight", year: "2008", category: "Action"},
                                                {title: "Pulp Fiction", year: "1994", category: "Drama"},
                                                {title: "Forrest Gump", year: "1994", category: "Romance"},
                                            
                                            ]); 
        const [movieTitle, setMovieTitle] = useState("");
        const [movieYear, setMovieYear] = useState("");
        const [movieCategory, setMovieCategory] = useState("");
    

        function addMovie(){
            const newMovie ={title: movieTitle, year: movieYear, category: movieCategory};
            setMovies(m => [...m, newMovie]);

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
    
    

            return(
            
            <>
            <h1>Movies</h1>
          <div className='movie-list'>
            <div className='movie-form'>
              <input type="text" placeholder="Enter Movie Title" value={movieTitle.title} onChange={changeTitle}/><br />
              <input type="number" placeholder="Enter year of release" value={movieYear.year} onChange={changeYear} /><br />
              <input type="text" placeholder="Enter category" value={movieCategory.category} onChange={changeCategory}/><br />
              <button onClick={addMovie}>Add movie</button>
            </div>
            <div className='movie-list-display'>
             <ul>
             {movies.map((movie, index) => <li key={index}><span>{movie.title}</span> <span>({movie.year})</span> <span>{movie.category}</span> <span></span></li>)}
        
              </ul>
              <ul></ul>
            </div>
          </div>
          
            
      </>)
}

     
export default MovieList;