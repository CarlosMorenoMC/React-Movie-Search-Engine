import React, {Component} from "react";

const API_PARAM = {
    KEY:"8cace39"
} ;

export class SearchForm extends Component {

    state = {
        inputMovie:"",
        error: null,
        responseStatus: null
    }

    _handleChange = (event) => {
        this.setState({ inputMovie:event.target.value})
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        let url  = `http://www.omdbapi.com/?apikey=${API_PARAM.KEY}&s=${this.state.inputMovie}`;
        fetch(url)
            .then(response => {
                this.setState({responseStatus:response.status});
                return response.json();
                })
            .then(result => {
                this.setState({
                    error: result.Error,
                })
                this.props.onResults(result)
                }, error => {
                console.log(error)
            })
    }


    render() {

        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field is-grouped  ">
                    <div className="control is-expanded">
                        <input
                            className="input is-rounded is-inverted"
                            name="finder"
                            type="text"
                            placeholder="Find a movie..."
                            onChange={this._handleChange}
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
}