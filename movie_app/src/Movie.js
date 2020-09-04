import React from "react"
import PropTypes from "prop-types"


function Movie(id, year,title, summary, poster){
    return(
        <div>
            <img src={poster} alt="poster"/>
            <h1>{title}</h1>
            <h2>{year}</h2>
            <p>{summary}</p>
        </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie