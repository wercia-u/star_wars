import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import { MovieCard } from '../';

const RenderMovies = (props) => {
    const movies = props.movies;
    if (isEmpty(movies)) {
        return <div>Ups, czyżby brak danych?</div>;
    }
    const moviesList = movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
    ));
    return moviesList;
}

export default RenderMovies;