import { Form, Formik, FormikHelpers } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import Button from '../../components/Button'
import DateField from '../../components/forms/DateField'
import ImageField from '../../components/forms/ImageField'
import MarkdownField from '../../components/forms/MardownField'
import TextField from '../../components/forms/TextField'
import { ACTOR_PAGE } from '../../routing/paths'
import { actorCreationDTO } from './actor.model'


export default function ActorForm(props: actorFormProps) {
  return (
    <div className='container'>
    
    <Formik 
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            name: Yup.string().required('This field is required')
        })}
        >
          {(formikProps) => (
            <Form>
              <TextField field="name" displayName="Name" />
              <DateField displayName="Date of Birth" field="dateOfBirth" />
              <ImageField displayName="Image" field="image"
              imageURL={props.model.pictureURL} />
              <MarkdownField displayName='Biography' field="biography"  />

              <Button type="submit" disabled={formikProps.isSubmitting}>Save changes</Button>
              <Link to={ACTOR_PAGE} className="btn btn-secondary">Cancel</Link>
            </Form>
          )}
      </Formik>

      </div>
  )
}

interface actorFormProps {
    model: actorCreationDTO;
    onSubmit(values: actorCreationDTO, action: FormikHelpers<actorCreationDTO>): void;
}


