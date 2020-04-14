import React from 'react';
import {Title} from "./title";
import {SearchForm} from "./search-form";

export const Header = (props) => {

    const _handleResults = (results) => {
        props.onResults(results);
    }

    return(
        <header className="hero is-medium is-primary is-bold is-small ">
            <section className="hero-body">
                <Title>Movie Search Engine</Title>
                <section className="container">
                    <div className="searchForm-wrapper">
                        <SearchForm onResults={_handleResults}/>
                    </div>
                </section>
            </section>
        </header>
    )
}