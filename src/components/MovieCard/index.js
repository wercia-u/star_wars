import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';
import { MovieContent } from '../';

const MovieCard = (movie) => {
    const addToFav = (
        <NavLink to={`movie/${movie['_id']}`}>
            Oglądam <Icon type="double-right" theme="outlined" />
        </NavLink>
    )
    return (
        <MovieContent {...movie} />
    );
}

export default MovieCard;
