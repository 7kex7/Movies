import { useState, useEffect } from 'react';
import "./Index.css"
import MoviesList from "./movies/MoviesList";
import { landingPageDTO } from './movies/movies.model';

export default function Home() {

    const [movies, setMovies] = useState<landingPageDTO>({})

    useEffect(() => {
      const timer = setTimeout(
        () => setMovies(
            {
              inTheaters: [
                {
                  id: 1,
                  title: "Fast Five", 
                  poster: "https://upload.wikimedia.org/wikipedia/en/0/0c/Fast_Five_poster.jpg"
                },
                {
                  id: 4,
                  title: "Fast Eight", 
                  poster: "https://upload.wikimedia.org/wikipedia/en/0/0c/Fast_Five_poster.jpg"
                },
                {
                  id: 32,
                  title: "Fast Six", 
                  poster: "https://upload.wikimedia.org/wikipedia/ru/thumb/4/48/Fast_and_Furious_6.jpg/211px-Fast_and_Furious_6.jpg"
                },
              ],
              upcomingReleases: [
                {
                  id: 2,
                  title: "Fast Six", 
                  poster: "https://upload.wikimedia.org/wikipedia/ru/thumb/4/48/Fast_and_Furious_6.jpg/211px-Fast_and_Furious_6.jpg"
                },
                {
                  id: 3,
                  title: "Fast Seven", 
                  poster: "https://upload.wikimedia.org/wikipedia/ru/thumb/e/e4/Furious_7.jpg/210px-Furious_7.jpg"
                },
              ]
            })

        , 1300)

      return () => clearTimeout(timer)
    }, [])

    return (
      <>
          <div className='home'>
            <h3>In Theaters:</h3>
            <MoviesList movies={movies.inTheaters}/>

            <h3>Upcoming Releases:</h3>
            <MoviesList movies={movies.upcomingReleases }/>
          </div>
      </>
    );
}
