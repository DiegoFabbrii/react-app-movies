import React from "react";
import { Container } from "./styles";
import useMovies from "../../hooks/useMovies";
import { Link } from "react-router-dom";

function Movies() {
    const allMovies = useMovies();
    const imgPath = "https://image.tmdb.org/t/p/w500/";
    return (
        <>
            {allMovies.map((movie) => {
                return (
                    <Link to={`/movies/${movie.id}`} key={movie.id}>
                        <Container key={movie.id}>
                            <img
                                src={imgPath + movie.poster_path}
                                alt="movie poster"
                            />
                            <p>{movie.title}</p>
                        </Container>
                    </Link>
                );
            })}
        </>
    );
}

export default Movies;
