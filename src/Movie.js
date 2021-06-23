import React from 'react';

class Movie extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.year}-{this.props.genre}-{this.props.title}</h1>
                <h2>{this.props.description}</h2>
            </div>
        );
    }
}

export default Movie;
