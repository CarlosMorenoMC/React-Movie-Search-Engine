import React, {Component} from 'react'
import {MovieList} from "../components/movies-list";
import {Header} from "../components/header";

export class Home extends Component {

    state = {
        search: [],
        totalResults: "",
        response: null,
        error: null
    };

    _handleResults = (results) => {
        this.setState({
            search: results.Search,
            totalResults: results.totalResults,
            response: results.Response,
            error: results.Error
        });
    }

    render() {

        const {search, totalResults, response, error} = this.state;

        return( <section className="body-home">
                    <Header onResults={this._handleResults}/>
                    {response
                    ? <section className="movies-list-section">
                            <MovieList
                                movies={search}
                                totalResults={totalResults}
                                response={response}
                                error={error}
                            />
                        </section>
                    : <BodyHome/>}
                </section>
        )
    }
}

const BodyHome = () =>{
    return (<div >
    </div>)
}