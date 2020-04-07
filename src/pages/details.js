import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ButtonBackToHome} from "../components/button-back-to-home";


const API_PARAM = {
    KEY:"8cace39"
} ;

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
            }
        )
    }

    state = {
        movie: {},
    }

    _renderMovieDetails = (id) => {

        let url  = `http://www.omdbapi.com/?apikey=${API_PARAM.KEY}&i=${id}`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(result => {
                this.setState({
                    movie: result
                })
                console.log(result)
            }, error => {
                console.log(error)
            })
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this._renderMovieDetails(id)
    }


    render() {
        const {Title, Year, Plot, Runtime, Type, totalSeasons, Genre, Director, Actors, Poster,imdbRating, Awards, Rated} = this.state.movie;

        return(
            <section className="details">
                <div className="container">
                    <ButtonBackToHome/>
                    {this.state.movie.Response === "False"
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
}