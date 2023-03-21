import { Field } from "formik"


export default function CheckboxField(props: checkboxFieldProps) {
  return (
    <div className="form-check mb-3">
      <Field type="checkbox" className="form-check-input"
      id={props.field} name={props.field} />
      <label htmlFor={props.field}>{props.displayName}</label>
    </div>
  )
}
interface checkboxFieldProps {
  displayName: string;
  field: string;
}