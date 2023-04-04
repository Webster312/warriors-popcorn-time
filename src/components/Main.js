import "./Main.css"

function Main(){

    const moviesArray = [
        {
          "id": 1,
          "title": "The Godfather",
          "rating": 9
        },
        {
          "id": 2,
          "title": "Forrest Gump",
          "rating": 9
        },
        {
          "id": 3,
          "title": "Gladiator",
          "rating": 8
        },
      ]


    return(
        <div className="Main">
            {moviesArray.map( (movieObj) => {
                return(
                    <div key={movieObj.id} className="card">
                        <p>{movieObj.title}</p>
                        <p>Rating: {movieObj.rating}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Main;