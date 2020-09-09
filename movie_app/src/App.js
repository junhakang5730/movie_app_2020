import React from "react"
import axios from "axios"
import Movie from "./Movie"


// class App extends React.Component{
  
//   state = {
//     isLoading : true,
//     movies: []
//   }

//   getMovies = async() => {
//     const {data: {data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
//     console.log(movies)
//     this.setState({movies , isLoading : false})
//   }

//   componentDidMount() {
//     this.getMovies()
//   }

//   render() {

//     const { isLoading , movies } = this.state

//     return 
//       <div>{isLoading ? "Loading" : movies.map(movie => {
//               console.log(movie)
//               return <Movie 
//                 id = {movie.id }
//                 year = { movie.year }
//                 title = { movie.title }
//                 summary = { movie.summary }
//                 poster = { movie.poster } />
//               })}</div>
//   }
// }

class App extends React.Component{
  state = {
    isLoading : true,
    movies: []
  }

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    console.log(movies.data.data.movies[2])
    this.setState(this.state.movies = movies.data.data.movies)
    // console.log(this.state.movies[2].title)
  }

  componentDidMount() {
    this.getMovies()
  }


  render(){
    const Movies = this.state.movies
    
    return <div>
      {Movies.map( movie => {
        
      return <Movie title={movie.title} key={movie.id} poster={movie.large_cover_image} year={movie.year} />
    })}
    </div>
  }
}




export default App;

