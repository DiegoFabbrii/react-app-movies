import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=47f73571c427df616300c388083c0d1b&language=pt-BR`
            );

            const data = await res.json();
            setMovie([data]);
        };
        fetchData();
    }, [id]);

    return movie;
}

export default useMovie;
