import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {ButtonBackToHome} from "../components/button-back-to-home";
import {useParams} from "react-router";


const API_PARAM = {
    KEY:"8cace39"
} ;

const Detail = (props) => {

    const [movie, setMovie] = useState({});

    let {id} = useParams();

    const fetchMovieDetails = async (id) => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const url  = `http://www.omdbapi.com/?apikey=${API_PARAM.KEY}&i=${id}`;
        const callApi = await fetch(url, { signal : signal});
        const movieDetails = await callApi.json()
        setMovie(movieDetails)
        return function cleanup () {
            abortController.abort();
        }
    }

    useEffect(() => {
        fetchMovieDetails(id);
    }, [id])


    const {Title, Year, Plot, Runtime, Type, totalSeasons, Genre, Director, Actors, Poster,imdbRating, Awards, Rated} = movie;

    return(
        <section className="details">
            <div className="container">
                <ButtonBackToHome/>
                {movie.Response === "False"
                ?    <div className="notification is-danger">
                        <span role="img" aria-label="search" style={{fontSize:25}}>Incorrect Id</span>
                    </div>
                : <div className="container card-details-container">
                        <div className="card ">
                            {Poster !== "N/A"
                                ? <div className="card-image">
                                    <figure className="image">
                                        <img
                                            src={Poster}
                                            alt={Title}/>
                                    </figure>
                                </div>
                                : null
                            }
                            <div className="card-content">
                                <div className="content">
                                    <div className="title is-4">{Title} ({Year})</div>
                                    {Director !== "N/A"
                                        ? <div className="title is-6">{Director}</div>
                                        : null
                                    }
                                    {Runtime !== "N/A"
                                        ? <div className="title is-6">Duration: {Runtime}</div>
                                        : null
                                    }
                                    <div className="subtitle is-6 is-spaced"><strong>{Type}</strong>: {Genre}</div>
                                    { Type === "series"
                                        ?<div className="subtitle is-6 is-spaced">Seasons: {totalSeasons}</div>
                                        :null
                                    }
                                    {Actors !== "N/A"
                                        ? <div className="title is-6">{Actors}</div>
                                        : null
                                    }
                                    {Plot !== "N/A"
                                        ? <div className="subtitle is-6 is-spaced">{Plot}<br/></div>
                                        : null
                                    }
                                    {Awards !== "N/A"
                                        ?<div className="subtitle is-6 is-spaced">{Awards}</div>
                                        : null
                                    }
                                    <div className="title is-4 is-spaced">{imdbRating}</div>
                                    {Rated !== "N/A"
                                        ?<div className="subtitle is-6 is-spaced">{Rated}</div>
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        </section>
    )
}

Detail.propTypes = {
    match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        }
    )
}

export default Detail;