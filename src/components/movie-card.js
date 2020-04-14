import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export const Movie = (props) => {

    const {title, id, year, poster} = props;

    return(
        <Link to={`/detail/${id}`}>
            <div className="card card-link">
                {poster !== "N/A"
                    ? <div className="card-image">
                        <figure className="image">
                            <img
                                src={poster}
                                alt={title}/>
                        </figure>
                    </div>
                    : null
                }
                <div className="card-content">
                    <div className="content">
                        <div className="title is-5">{title}</div>
                        <div className="subtitle is-6">{year}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

Movie.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
}