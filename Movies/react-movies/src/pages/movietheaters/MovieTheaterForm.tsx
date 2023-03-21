import { Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import TextField from '../../components/forms/TextField'
import { MOVIETH_PAGE } from '../../routing/paths'
import { movieTheaterCreationDTO } from './movieTheater.mode'
import MapField from '../../components/forms/MapField'
import coordinateDTO from '../../components/coordinates.model'
import { useState } from 'react'

export default function MovieTheaterForm(props: movieTheaterForm) {

  function transformCorrdinates(): coordinateDTO[] | undefined {
    if (props.model.latitude && props.model.longitude) {
      const response: coordinateDTO = {
        lat: props.model.latitude,
        lng: props.model.longitude,
      }
      return [response]
    }

    return undefined
  }

  return (
    <div className='container'>
    
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
          name: Yup.string().required('This field is required'),
          // location: Yup.date().nullable().required('This field is required')
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Name" field="name"/>
          <div className="m-1">
            <MapField
              latField='latitude'
              lngField='longitude'
              coordinates={transformCorrdinates()}
            />
          </div>
            
          <Button type="submit" disabled={formikProps.isSubmitting}>Save changes</Button>
          <Link className='btn btn-secondary' to={MOVIETH_PAGE}>Cancel</Link>
        </Form>
      )}
    </Formik>

    </div>
  )
}

interface movieTheaterForm {
  model: movieTheaterCreationDTO;
  onSubmit(values: movieTheaterCreationDTO, action: FormikHelpers<movieTheaterCreationDTO>): void;
}
