import { useParams } from "react-router-dom"
import GenreForm from "./GenreForm"


export default function EditGenre() {

    const {id}: any = useParams()

    if (!Number(id)) return <div>id must be a number</div>

    return (
        <>
          <h3>Edit Genre</h3>
          <GenreForm
            model={{name: ''}}
            onSubmit={async value => {
              await new Promise(r => setTimeout(r, 1000))
              console.log(value);
            }}
          />
        </>
    )
}