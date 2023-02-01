import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';
import NestedComments from './NestedComments';

const MovieDesPage = () => {

    const { id } = useParams();
    const [movieDes, setMovieDes] = useState({});

    useEffect(() => {
        fetchDesc();
    }, []);

    const fetchDesc = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=05005e7be5dd9895bcf90a528d1f791b&language=en-US`);
        const json = await data.json();
        setMovieDes(json);
    }

    return (
        <div>
            <MovieCard singleMovie={movieDes} />
            <NestedComments />
        </div>
    )
}

export default MovieDesPage