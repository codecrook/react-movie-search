import React from 'react';

export default function SearchMovies() {
    const searchMovies = async (e) => {
        e.preventDefault();
        const query = 'Jurasic';

        const key = process.env.REACT_APP_API_KEY;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}&language=en-US&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const movies = await res.json();

            console.log(movies);
        } catch (err) {
            console.error(err);
        }


    };

    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="i.e. Jurassic Park" />
            <button className="button" type="submit">Search</button>
        </form>
    );
}
