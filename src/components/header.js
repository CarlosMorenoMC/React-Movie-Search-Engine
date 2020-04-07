import React, {Component} from 'react';
import {Title} from "./title";
import {SearchForm} from "./search-form";

export class Header extends Component {

    _handleResults = (results) => {
        this.props.onResults(results);
    }

    render() {

        return(
            <header className="hero is-medium is-primary is-bold is-small ">
                <section className="hero-body">
                    <Title>Movie Search Engine</Title>
                    <section className="container">
                        <div className="searchForm-wrapper">
                            <SearchForm onResults={this._handleResults}/>
                        </div>
                    </section>
                </section>
            </header>
        )
    }
}