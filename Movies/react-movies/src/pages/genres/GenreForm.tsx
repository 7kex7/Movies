import Button from "../../components/Button"
import { Formik, Form, FormikHelpers } from "formik"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import { GENRES_PAGE } from "../../routing/paths"
import TextField from "../../components/forms/TextField"
import { genreCreationDTO } from "./genres.model"

export default function GenreForm(props: genreFormProps) {

    return (
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

              <Button
                type="submit"
                disabled={formikProps.isSubmitting}
                className="BtnToSaveChanges"
              >Save changes</Button>
              <Link to={GENRES_PAGE} className="btn btn-secondary ml-3">Cancel</Link>
            </Form>
          )}
      </Formik>
    )
}

interface genreFormProps {
  model: genreCreationDTO;
  onSubmit(value: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void
}
