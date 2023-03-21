import { Field, Form, Formik } from 'formik';
import Button from '../../components/Button';
import { genreDTO } from '../genres/genres.model';


export default function FilterMovies() {
  
  const initialValues: filterMoviesForm = {
    title: '',
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false
  }

  const genres: genreDTO[] = [{id: 1, name: "Drama"}, {id: 2, name: "Comedy"}]
  
  return (
    <>
      <h3>FilterMovies</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
      >
        {(formikProps) => (
          <Form>
            <div className='row gx03 align-items-center'>
              <div className='col-auto'>
                <input
                  type='text' className='form-control'
                  id='title' placeholder='Title of the movie'
                  {...formikProps.getFieldProps('title')}
                />
              </div>
              <div className="col-auto">
                <select className='form-select'
                  {...formikProps.getFieldProps('genreId')}
                >
                  <option value='0'>--Chose a genre--</option>
                  {
                    genres?.map(genre =>
                    <option value={'' + genre.id}>{genre.name}</option>)
                  }
                </select>
              </div>
              <div className='col-auto'>
                <div className='form-check'>
                  <Field className='form-check-input' id='upcomingReleases'
                  name='upcomingReleases' type='checkbox' />
                  <label htmlFor="upcomingReleases"
                  className='form-check-label'>Upcoming Releases</label>
                </div>
              </div>
              <div className='col-auto'>
                <div className='form-check'>
                  <Field className='form-check-input' id='inTheaters'
                  name='inTheaters' type='checkbox' />
                  <label htmlFor="inTheaters"
                  className='form-check-label'>In Theaters</label>
                </div>
              </div>
              <div className="col-auto">
                <Button onClick={() => formikProps.submitForm()}
                >Filter</Button>
                <Button className='btn-danger ms' 
                onClick={() => formikProps.setValues(initialValues)}
                >Filter</Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

interface filterMoviesForm {
  title: string;
  genreId: number;
  upcomingReleases: boolean;
  inTheaters: boolean;
}
