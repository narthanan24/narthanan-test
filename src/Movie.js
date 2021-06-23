import React from 'react';

const Movie = ({year,title,description,genre}) => {
    return (
        <div>
            <h1>{year}-{genre}-{title}</h1>
            <h2>{description}</h2>
        </div>
    );
}

export default Movie;
