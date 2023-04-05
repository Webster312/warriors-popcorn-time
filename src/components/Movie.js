const Movie = (props) => {
  return (
    <div key={props.movieDetails.id} className="card">
      <h2>{props.movieDetails.title}</h2>

      {props.movieDetails.imgURL ? (
        <img src={props.movieDetails.imgURL} alt={props.movieDetails.title} />
      ) : (
        <img src="https://dummyimage.com/182x268/aaaaaa/000000" />
      )}

      <h3>Rating: {props.movieDetails.rating}</h3>
      <h3>Year: {props.movieDetails.year}</h3>
      <button onClick={() => props.parentDeleteFunction(props.movieDetails.id)}>DELETE</button>
      {props.movieDetails.rating > 8 && <p className="badge">RECOMMENDED</p>}
    </div>
  );
};

export default Movie;