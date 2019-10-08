import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'; 
import MovieRow from './MovieRow.js'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {}  
    // console.log("This is my initializer")

      // const movies = [
      //   { id: 0, poster_src: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg" , title: "Avengers: Infinity War", overview: "Lorem ipsum dolor amet taiyaki marfa schlitz sriracha bitters disrupt small batch. Distillery la croix cred, hot chicken lyft tumblr fixie. Edison bulb forage disrupt brooklyn wolf meditation. Flexitarian mlkshk chia synth crucifix irony tumblr taiyaki squid shaman chicharrones gluten-free portland farm-to-table. Four dollar toast quinoa tousled, XOXO asymmetrical poke raw denim pug succulents chartreuse affogato organic. Pitchfork pok pok street art cray. Beard kogi vexillologist retro la croix trust fund pour-over organic keffiyeh asymmetrical artisan, normcore mumblecore typewriter." },
      //   { id: 1, poster_src: "https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._SY606_.jpg", title: "Avengers: Endgame", overview: "Lorem ipsum dolor amet taiyaki marfa schlitz sriracha bitters disrupt small batch. Distillery la croix cred, hot chicken lyft tumblr fixie. Edison bulb forage disrupt brooklyn wolf meditation. Flexitarian mlkshk chia synth crucifix irony tumblr taiyaki squid shaman chicharrones gluten-free portland farm-to-table. Four dollar toast quinoa tousled, XOXO asymmetrical poke raw denim pug succulents chartreuse affogato organic. Pitchfork pok pok street art cray. Beard kogi vexillologist retro la croix trust fund pour-over organic keffiyeh asymmetrical artisan, normcore mumblecore typewriter." },
      // ]
    

      // var movieRows = []
      // movies.forEach((movie) => {
      //   console.log(movie.title)
      //   const movieRow = <MovieRow movie={movie} />
 
      //   movieRows.push(movieRow)
      // })

      // this.state = {rows: movieRows}
      this.performSearch("man")
  }

  performSearch(searchTerm) {
    console.log("perform search term")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=bd57c465124b01d880b8dd4d14066cc6&query=" + searchTerm


    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched successfully")
        //console.log(searchResults)
        const results = searchResults.results
        //console.log(results[0])

        var movieRows = []

        results.forEach((movie) => {
          
          movie.poster_src= "https://image.tmdb.org/t/p/w185" + movie.poster_path
          console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })
        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

render() {
  return (
    <div >

      <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <img alt="app icon" width="50" src="film-roll.svg" />
            </td>
            <td width="8" />
            <td>
              <h1>MoviesDB Search</h1>
            </td>
          </tr>
        </tbody>
      </table>

      <input style={{
        fontSize: 24,
        display: 'block',
        width: "199%",
        paddingTop: 8,
        paddingBOttom: 8,
        paddingLeft: 16
      }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter Search Term" />

      {this.state.rows}

    </div>
  );
}
}
  

export default App;
