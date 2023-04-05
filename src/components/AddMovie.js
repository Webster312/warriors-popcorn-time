import { useState } from "react";

import "./AddMovie.css"


function AddMovie(props) {

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [imgURL, setImgURL] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const newMovie = {
            title: title,
            rating: rating,
            imgURL: imgURL
        };

        props.callbackToAdd(newMovie);

        //clear form
        setTitle("");
        setRating("");
        setImgURL("");

    }

    return (
        <section className="AddMovie">
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
    );
}

export default AddMovie;