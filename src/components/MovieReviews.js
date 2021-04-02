import React from 'react';

const MovieReviews = ({ reviews }) => { 
    return(
        <div className="review-list">
            {reviews.map( review => (
                <div key={review.headline} className="review">
                    <header>
                        <a className="review-link" href={review.link.url}>
                            {review.headline}
                        </a>
                        <span className="author">{review.byline}</span>
                    </header>
                    <blockquote>{review.summaryshort}</blockquote>
                </div>
            ))}
        </div>
    )
}

export default MovieReviews;