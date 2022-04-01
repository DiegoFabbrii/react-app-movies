import React from "react";
import * as Styled from "./styles";
import useMovie from "../../hooks/useMovie";
import { AiFillStar } from "react-icons/ai";
import Back from "../back";

function MovieDetails() {
    const movie = useMovie();
    const imgPath = "https://image.tmdb.org/t/p/w500/";

    return (
        <>
            {movie.map((item) => {
                return (
                    <div key={item.id}>
                        <Styled.Title>{item.title}</Styled.Title>

                        <Styled.Container>
                            <Styled.MovieImg>
                                <img
                                    src={imgPath + item.backdrop_path}
                                    alt=""
                                />
                            </Styled.MovieImg>

                            <Styled.Overview>
                                <Styled.Genres>
                                    {item.genres.map((genre) => {
                                        return (
                                            <li key={genre.id}>{genre.name}</li>
                                        );
                                    })}
                                </Styled.Genres>

                                <Styled.VoteAvarage>
                                    {<AiFillStar />}
                                    <span>{item.vote_average}</span>
                                </Styled.VoteAvarage>
                                <h3>Sinopse</h3>
                                <p>{item.overview}</p>
                                <Back />
                            </Styled.Overview>
                        </Styled.Container>
                    </div>
                );
            })}
        </>
    );
}

export default MovieDetails;
