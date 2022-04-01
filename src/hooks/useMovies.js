import { useEffect, useState } from "react";

const useMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                "https://api.themoviedb.org/3/movie/popular?api_key=47f73571c427df616300c388083c0d1b&language=pt-br-US&page=1"
            );

            const { results } = await res.json();
            setMovies(results);
        };
        fetchData();
    }, []);

    return movies;
};

export default useMovies;
