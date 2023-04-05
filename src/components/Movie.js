function Movie(props) {

    return (
        <div className="card">
            <h2>{props.movieDetails.title}</h2>

            {props.movieDetails.imgURL
                ? <img src={props.movieDetails.imgURL} alt={props.movieDetails.title} />
                : <img src="https://dummyimage.com/182x268/aaaaaa/000000" />
            }

            <h3>Rating: {props.movieDetails.rating}</h3>
            
            {props.movieDetails.year && <h3>Year: {props.movieDetails.year}</h3> }
            
            {props.movieDetails.rating > 8 && <p className="badge">RECOMMENDED</p>}


            <button onClick={() => {props.callbackToDelete(props.movieDetails.title)}}>Delete</button>
        </div>
    )
}

export default Movie;