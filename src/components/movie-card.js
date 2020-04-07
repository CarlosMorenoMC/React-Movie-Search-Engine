import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export class Movie extends Component {
    static propTypes = {
        title: PropTypes.string,
        id: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
    }

    render() {

        const {title, id, year, poster} =this.props;

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
}