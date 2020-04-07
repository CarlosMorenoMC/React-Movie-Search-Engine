import React, {Component} from 'react';

export class Footer extends Component {
    render() {
        return (
            <footer className="footer hero is-medium is-primary is-bold">
                <div className="content has-text-centered">
                    <p>
                        Movie Finder App by <a href="/">Carlos Moreno</a>. API provided by
                        <a href="http://www.omdbapi.com/" target="_blank"> OMBb</a>
                    </p>
                </div>
            </footer>
        )
    }
}