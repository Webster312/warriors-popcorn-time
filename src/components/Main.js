import { useState } from "react";
import Movie from "./Movie";

import "./Main.css"

function Main(props){


    console.log(props)


    // let title;
    // if(moviesArr.length > 1){
    //     title = <h1>We have {moviesArr.length} movies</h1>;
    // } else if(moviesArr.length === 1){
    //     title = <h1>We have 1 movie</h1>;
    // } else {
    //     title = <h1>Sorry, no movies to display</h1>;
    // }


    return(
        <div className="Main">
            
            {/* <h1>We have {moviesArr.length} movies</h1> */}

            {props.moviesArr.map( (movieObj) => {
                return <Movie key={movieObj.id} movieDetails={movieObj} callbackToDelete={props.callbackToDelete}  />
            })}

        </div>
    )
}

export default Main;