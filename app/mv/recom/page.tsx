import React from "react";

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const metadata = {
    title: "랜덤영화추천"
}

async function getMovies() {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
}

export default async function TodayRecommendMovie() {
    const movies = await getMovies();
    
    return(
        <div>
            {JSON.stringify(movies)}
        </div>
    )
}