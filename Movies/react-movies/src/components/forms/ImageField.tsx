import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";


export default function ImageField(props: imageFieldProps) {

  const [imageBase64, setImageBase64] = useState('')
  const [imageURL, setImageURL] = useState(props.imageURL)

  const {values} = useFormikContext<any>()

  const field = props.field || props.displayName.replace(/\s/g, "")

  const imageStyle = {
    width: "450px"
  }

  async function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.currentTarget.files) {
      const img = event.currentTarget.files[0]
      if (img) {
        await Base64(img)
          .then(base64 => setImageBase64(base64))
          .catch(e => console.error(e))
        values[props.field] = img
        setImageURL('')
      } else {
        setImageBase64('')
      }
    }
  }
  function Base64 (file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (e) => reject(e + '')
    }) 
  }

  return (
    <>
      <label htmlFor={field}>{props.displayName}</label>
      <input type="file" className='form-control' 
        id={field}
        accept='.jpg,.jpeg,.png'
        onChange={handleChange}
      />
      {imageBase64 &&
        <div className="m-3">
          <img src={imageBase64} style={imageStyle} alt="selected pict" />
        </div>
      }
      {imageURL &&
        <div className="m-3">
          <img src={imageURL} style={imageStyle} alt="selected pict" />
        </div>
      }
    </>
  )
}

interface imageFieldProps {
  displayName: string;
  field: string;
  imageURL?: string;
}

ImageField.defaultProps = {
  imageURl: '',
  field: ''
}
