import { ErrorMessage, Field } from 'formik'


export default function TextField(props: textFielidProps) {
  return (
    <div className="mb-3">
      <label htmlFor={props.field} className="d-block">{props.displayName}</label>
      <Field name={props.field} id={props.field} className="form"/>
      <ErrorMessage name={props.field}>
          {msg => <div className="text-danger">{msg}</div>}
      </ErrorMessage>
    </div>
  )
}

interface textFielidProps {
    field: string;
    displayName: string;
}
