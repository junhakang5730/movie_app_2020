import React from "react"
// import PropTypes from "prop-types"
import "./Movie.css"

function Movie({title, id, year , summary , poster}){
    return(
        <div class="card">
            <img src = {poster} />
            <p> {year} </p>
            <h1>i like {title}</h1>
        </div>
    )
}

// Movie.propTypes = {
//     id : PropTypes.number.isRequired,
//     year : PropTypes.number.isRequired,
//     title : PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
// }

export default Movie