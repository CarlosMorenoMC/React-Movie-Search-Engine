import React, {useState} from 'react'
import {MovieList} from "../components/movies-list";
import {Header} from "../components/header";

const Home  = () => {

    const [search, setSearch] = useState([]);
    const [totalResults, setTotalResults] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const _handleResults = (results) => {
        setSearch(results.Search);
        setTotalResults(results.totalResults);
        setResponse(results.Response);
        setError(results.Error);
    }


    return( <section className="body-home">
                <Header onResults={_handleResults}/>
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

const BodyHome = () =>{
    return (<div >
    </div>)
}

export default Home;