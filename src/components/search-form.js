import React, {useState} from "react";

const API_PARAM = {
    KEY:"8cace39"
} ;

export const SearchForm = (props) => {

    const [inputMovie, setInputMovie] =useState ("");
    const [error, setError] =useState (null);
    const [responseStatus, setResponseStatus] =useState (null);
    const onResults = props.onResults;

    const _handleChange = (event) => {
        setInputMovie (event.target.value);
    }

    const _handleSubmit = (event) => {
        event.preventDefault();
        let url  = `http://www.omdbapi.com/?apikey=${API_PARAM.KEY}&s=${inputMovie}`;
        fetch(url)
            .then(response => {
                setResponseStatus(response.status)
                return response.json();
                })
            .then(result => {
                setError(result.error)
                console.log(onResults)
                onResults(result)
                }, error => {
                console.log(error)
            })
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