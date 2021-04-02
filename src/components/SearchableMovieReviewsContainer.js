import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleSearchTerm = (event) => this.setState({ searchTerm: event.target.value })

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
            .then(response => response.json())
            .then(fetchReviews => this.setState({ reviews: fetchReviews.results }))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search Movie Reviews</label>
                    <input 
                        id="search-input"
                        type="text"
                        style={{ width: 300 }}
                        onChange={this.handleSearchTerm}
                    />
                </form>

                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
