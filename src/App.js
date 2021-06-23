import './App.css';
import Movie from "./Movie";
import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [
                {
                    id: 1, year: 1999, genre: "Sci-Fi", title: "Matrix",
                    description: "A computer hacker learns about his reality"
                },
                {
                    id: 2, year: 1994, genre: "Drama", title: "The Shawshank Redemption",
                    description: "Two imprisoned men bond over a number of years"
                }
            ]
        }
    }


    render() {
        return (
            <div className="App">
                {this.state.movies?.map((movie, index) =>
                    <div key={index}>
                        <Movie
                            year={movie.year}
                            genre={movie.genre}
                            title={movie.title}
                            description={movie.description}
                        />
                    </div>
                )
                }
            </div>
        );
    }
}

export default App;
