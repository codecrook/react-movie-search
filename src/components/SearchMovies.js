import React, { useState } from 'react';
import MovieCard from './MovieCard';

export default function SearchMovies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const key = process.env.REACT_APP_API_KEY;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}&language=en-US&page=1&include_adult=true`;

        try {
            const res = await fetch(url);
            const { results } = await res.json();
            setMovies(results);

        } catch (err) {
            console.error(err);
        }


    };

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input
                    className="input"
                    type="text"
                    name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>

            <div className="card-list">
                {
                    movies.filter(movie => movie.poster_path)
                        .map(movie => <MovieCard key={movie.id} movie={movie} />)
                }
            </div>
        </>
    );
}
