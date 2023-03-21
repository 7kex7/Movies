import { genreDTO } from '../genres/genres.model'
import MovieForm from './MovieForm'

export default function EditMovie() {

  const nonSelectedGenres: genreDTO[] = [{id: 1, name: "Comedy"}]
  const selectedGenres: genreDTO[] = [{id: 2, name: "Drama"}]

  const selectedMovieTheaters: genreDTO[] = [{id: 2, name: "VOLNA"}]
  const nonSelectedMovieTheaters: genreDTO[] = [{id: 1, name: "Star Movie Theater"}]

  return (
    <>
      edit movie
      <MovieForm
        model={{title:'', inTheaters: true, trailer: 'url'}}
        onSubmit={values => console.log(values) }

        selectedGenres={selectedGenres}
        nonSelectedGenres={nonSelectedGenres}

        selectedMovieTheaters={selectedMovieTheaters}
        nonSelectedMovieTheaters={nonSelectedMovieTheaters}

        selectedActors={[]}
      />
    </>
  )
}
