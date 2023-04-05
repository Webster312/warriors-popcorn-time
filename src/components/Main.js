import { useState } from "react";
import moviesFromJson from "../data/movies.json";
import Movie from './Movie.js'
import "./Main.css"

function Main(){

    const [moviesArr, setMoviesArr] = useState(moviesFromJson);
    
    const deleteMovie = (movieId) => {

        // const newList = moviesArr.filter( (movieDetails) => {
        //     if(movieDetails.id === movieId){
        //         return false; //this movie will not be included in the new array
        //     } else {
        //         return true;
        //     }
        // });

        const newList = moviesArr.filter( movieDetails => movieDetails.id !== movieId );


        setMoviesArr(newList);
    }


    let title;
    if(moviesArr.length > 1){
        title = <h1>We have {moviesArr.length} movies</h1>;
    } else if(moviesArr.length === 1){
        title = <h1>We have 1 movie</h1>;
    } else {
        title = <h1>Sorry, no movies to display</h1>;
    }

    const sortByHighestRating = () => {
        const copyArr = [...moviesArr].sort((a, b) => b.rating - a.rating);
        setMoviesArr(copyArr);
    }

    const sortByLowestRating = () => {
        const copyArr = [...moviesArr].sort((a, b) => a.rating - b.rating);
        setMoviesArr(copyArr);
    }

    return (
      <div className="Main">
        <button onClick={() => sortByHighestRating()}>SORT HIGHEST</button>
        <button onClick={() => sortByLowestRating()}>SORT Lowest</button>
        {moviesArr.map((movieObj) => {
          return <Movie movieDetails={movieObj} parentDeleteFunction={deleteMovie} />;
        })}
      </div>
    );
}

export default Main;