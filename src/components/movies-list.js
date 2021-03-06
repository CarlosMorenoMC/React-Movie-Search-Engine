import React from 'react';
import PropTypes from 'prop-types';
import {Movie} from "./movie-card";

export const MovieList = (props) => {

    const {inputValue, movies, response, error} = props;

    if (response === "False"){
        return <div >
                    <div className="notification is-danger">
                        {error} <span role="img" aria-label="search" style={{fontSize:25}}>&#129488;</span>
                    </div>
                </div>
    } else if (inputValue !== "") {
        return <div className="movies-list container">
                {Object.keys(movies).map(i => {
                    return <div key={movies[i].imdbID} className="movies-list-item">
                                <Movie
                                  title={movies[i].Title}
                                  id={movies[i].imdbID}
                                  poster={movies[i].Poster}
                                  year={movies[i].Year}/>
                            </div>})
                }
                </div>
    } else {
        return null
    }
}

MovieList.propTypes ={
    movies: PropTypes.array,
    totalResults: PropTypes.string,
    response: PropTypes.string,
    error: PropTypes.string
}

MovieList.defaultProps = {
    movies: [],
    totalResults: "0",
    response: "",
    error: ""
}