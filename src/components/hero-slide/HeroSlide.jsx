import React, { useEffect, useState } from 'react';

import tmdbApi, { category, movieType } from '~/api/tmdbApi';
import apiConfig from '~/api/apiConfig';
const HeroSlide = () => {
    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {});

    return <div className="hero-slide"></div>;
};

export default HeroSlide;
