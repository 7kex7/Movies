import { useState } from 'react';
import { Form, Formik, FormikHelpers } from 'formik'
import { movieCreationDTO } from './movies.model'
import * as Yup from 'yup'
import Button from '../../components/Button';
import TextField from '../../components/forms/TextField';
import { Link } from 'react-router-dom';
import { MOVIE_PAGE } from '../../routing/paths';
import DateField from '../../components/forms/DateField';
import ImageField from '../../components/forms/ImageField';
import CheckboxField from '../../components/forms/CheckboxField';
import MultipleSelector, { multipleSelectorModel } from '../../components/forms/MultipleSelector';
import { genreDTO } from '../genres/genres.model';
import { movieTheatersDTO } from '../movietheaters/movieTheater.mode';
import TypeAheadActors from '../../components/forms/TypeAheadActors';
import { actorMovieDTO } from '../actors/actor.model';


export default function MovieForm(props: movieFormProps) {

  const [selectedGenres, setSelectedGenres] = 
    useState(mapToModel(props.selectedGenres))
  const [nonSelectedGenres, setNonSelectedGenres] = 
    useState(mapToModel(props.nonSelectedGenres))

  const [selectedMovieTheaters, setSelectedMovieTheaters] = 
    useState(mapToModel(props.selectedMovieTheaters))
  const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = 
    useState(mapToModel(props.nonSelectedMovieTheaters))
  
  const [selectedActors, setSelectedActors] = useState(props.selectedActors)

  function mapToModel(items: {id: number, name: string}[]): multipleSelectorModel[] {
    return items.map(item => {
      return { key: item.id, value: item.name }
    })
  }

  return (
    <div className="container">

    <Formik
      initialValues={props.model}
      onSubmit={(values, actions) => {
        values.genresIds = selectedGenres.map(item => item.key)
        values.movieTheatersIds = selectedMovieTheaters.map(item => item.key)
        values.actors = selectedActors
        props.onSubmit(values, actions)
      }}
      validationSchema={Yup.object({
        title: Yup.string().required('This field is required')
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField field="title" displayName="Title" />
          <CheckboxField field="inTheaters" displayName="In Theaters"/>
          <TextField field="trailer" displayName="Trailer" />
          <DateField field="releaseDate" displayName="Release Date"/>
          <ImageField field="poster" displayName="poster"
            imageURL={props.model.posterURL}
          />
          <MultipleSelector
            displayName='Genres'
            selected={selectedGenres}
            nonSelected={nonSelectedGenres}
            onChange={(selected, nonSelected) => {
              setSelectedGenres(selected)
              setNonSelectedGenres(nonSelected)
            }}
          />
          <MultipleSelector
            displayName='Movie Theaters'
            selected={selectedMovieTheaters}
            nonSelected={nonSelectedMovieTheaters}
            onChange={(selected, nonSelected) => {
              setSelectedMovieTheaters(selected)
              setNonSelectedMovieTheaters(nonSelected)
            }}
          />

          <TypeAheadActors displayName='Actors' actors={selectedActors}
            onAdd={actors => {
              setSelectedActors(actors)
            }}
            onRemove={actor => {
              const actors = selectedActors.filter(x => x !== actor)
              setSelectedActors(actors)
            }}
            listUI={(actor: actorMovieDTO) => 
            <>
              {actor.name} / <input placeholder='Character' type='text'
              value={actor.character}
              onChange={e => {
                const index = selectedActors.findIndex(x => x.id === actor.id)
              
                const actors = [...selectedActors]
                actors[index].character = e.currentTarget.value
                setSelectedActors(actors)
              }}/>
            </>
            }
          />

          <Button
            type="submit"
            disabled={formikProps.isSubmitting}
            className="BtnToSaveChanges"
          >Save changes</Button>
          <Link to={MOVIE_PAGE} className="btn btn-secondary ml-3">Cancel</Link>
        </Form>
      )}
    </Formik>

    </div>
  )
}

interface movieFormProps {
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheatersDTO[];
    nonSelectedMovieTheaters: movieTheatersDTO[];
    selectedActors: actorMovieDTO[];
}
