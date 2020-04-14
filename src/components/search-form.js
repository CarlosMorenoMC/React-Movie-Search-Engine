import React, {useState} from "react";

const API_PARAM = {
    KEY:"8cace39"
} ;

export const SearchForm = (props) => {

    const [inputMovie, setInputMovie] =useState ("");
    const onResults = props.onResults;


    const fecthMovieList = async () => {
        const url  = `http://www.omdbapi.com/?apikey=${API_PARAM.KEY}&s=${inputMovie}`;
        const callApi = await fetch(url);
        const movieList = await callApi.json();
        onResults(movieList);
    }

    const _handleChange = (event) => {
        setInputMovie (event.target.value);
    }

    const _handleSubmit = (event) => {
        event.preventDefault();
        fecthMovieList();
    }

    return(
        <form onSubmit={_handleSubmit}>
            <div className="field is-grouped  ">
                <div className="control is-expanded">
                    <input
                        className="input is-rounded is-inverted"
                        name="finder"
                        type="text"
                        placeholder="Find a movie..."
                        onChange={_handleChange}
                        required="required"
                    />
                </div>
                <div className="control">
                    <button className="button is-dark is-rounded">
                        Search
                    </button>
                </div>
            </div>
        </form>
    )
}