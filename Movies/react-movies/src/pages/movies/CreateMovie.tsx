import { genreDTO } from '../genres/genres.model'
import MovieForm from './MovieForm'

export default function CreateMovie() {

  const nonSelectedGenres: genreDTO[] = [{id: 1, name: "Comedy"}, {id: 2, name: "Drama"}]
  const nonSelectedMovieTheaters: genreDTO[] = [{id: 1, name: "Star Movie Theater"}, {id: 2, name: "VOLNA"}]

  return (
    <>
      create movie
      <MovieForm
        model={{title:'', inTheaters: false, trailer: ''}}
        onSubmit={(values) => console.log(values)}
        
        selectedGenres={[]}
        nonSelectedGenres={nonSelectedGenres}
        
        selectedMovieTheaters={[]}
        nonSelectedMovieTheaters={nonSelectedMovieTheaters}

        selectedActors={[]}
      />
    </>
  )
}
