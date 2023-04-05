import { useState } from 'react';

import moviesFromJson from "./data/movies.json";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

function App() {

  const [moviesArr, setMoviesArr] = useState(moviesFromJson);

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [imgURL, setImgURL] = useState("");

  const deleteMovie = (movieTitle) => {
    const newList = moviesArr.filter( movieDetails => movieDetails.title !== movieTitle );
    setMoviesArr(newList);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title: title,
      rating: rating,
      imgURL: imgURL
    };

    setMoviesArr((prevMoviesArr) => {
      const newList = [newMovie, ...prevMoviesArr];
      return newList;
    });

    //clear form
    setTitle("");
    setRating("");
    setImgURL("");

  }


  return (
    <div className="App">
      <Header numberOfMovies={moviesArr.length} />

      <section>
        <form onSubmit={handleSubmit}>

          <label>
            Title:
            <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
          </label>

          <label>
            Rating:
            <input type="number" min={1} max={10} name='rating' value={rating} onChange={(e) => { setRating(e.target.value) }} />
          </label>

          <label>
            Image URL:
            <input type="text" name='imgURL' value={imgURL} onChange={(e) => { setImgURL(e.target.value) }} />
          </label>

          <button>Create</button>
        </form>
      </section>

      <Main moviesArr={moviesArr} callbackToDelete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
