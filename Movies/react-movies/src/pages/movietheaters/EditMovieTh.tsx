import { useParams } from "react-router-dom";
import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTh() {

  const {id}: any = useParams()
  if (!Number(id)) return <div>id must be a number</div>

  return (
    <div>
      <MovieTheaterForm
        onSubmit={async value => {
          await new Promise(r => setTimeout(r, 1000))
          console.log(value);
        }}
        model={{
          name: '',
        }}
      />
    </div>
  )
}
