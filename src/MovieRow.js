import React from 'react'

class MovieRow extends React.Component {
    viewMovie(){
        // console.log("trying to view movie")
        // console.log(this.props.movie.title)
        const url = "https:/www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    render() {
        return <table 
            key={this.props.movie.id} 
            style={{
            backgroundColor: '#F0F2F2',
            borderRadius: 5,
            borderWidth: 2,
            margin: 5,
            maxWidth: 700,

        }}>
            <tbody >
                <tr>
                    <td >
                        <img style={{
                            paddingLeft: 16,
                            paddingTop: 5
                        }}
                            alt="poster" width="120" src={this.props.movie.poster_src} />
                    </td>
                    <td>
                        <h3>
                            {this.props.movie.title}
                        </h3>
                        <p>{this.props.movie.overview}</p>
                        <input  
                                className="ui input"
                                type="button"
                                style={{
                                backgroundColor: "#186CB2",
                                borderRadius: 5,
                                padding: 15,
                                border: 'none',
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: "white",
                                margin: 4 ,
                                textAlign:'center' ,
                                }} 
                                onClick={this.viewMovie.bind(this)} value="View"/>
                    </td>
                </tr>
            </tbody>
        </table>      
    }
}

export default MovieRow