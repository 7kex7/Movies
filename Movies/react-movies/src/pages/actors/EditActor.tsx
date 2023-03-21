import { useParams } from "react-router-dom";
import ActorForm from "./ActorForm";

export default function EditActor() {

  const {id}: any = useParams()
  if (!Number(id)) return <div>id must be a number</div>

  return (
    <div className="container">
      <h3>Edit Actor, number {id}</h3>
      <ActorForm 
        onSubmit={async value => {
          await new Promise(r => setTimeout(r, 1000))
          console.log(value);
        }}
        model={{
          name: '',
          pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Jennifer_Lawrence_in_2016.jpg/220px-Jennifer_Lawrence_in_2016.jpg',
          biography: "# Something \n\n this is good to see *you*"
        }}
      />
    </div>
  )
}
