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
          <div >
            <div className='movie-form'>
              <input className='bg-gray-500 w-24' type="text" placeholder="Enter Movie Title" value={movieTitle.title} onChange={changeTitle}/><br />
              <input className='bg-gray-500' type="number" placeholder="Enter year of release" value={movieYear.year} onChange={changeYear} /><br />
              <input className='bg-gray-500'type="text" placeholder="Enter category" value={movieCategory.category} onChange={changeCategory}/><br />
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