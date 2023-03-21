import { ReactElement, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../../pages/actors/actor.model";


export default function TypeAheadActors(props: typeAheadActorsProps) {
  
  const actors: actorMovieDTO[] = [
    {
      id: 1, name: 'Nikita', character: 'drug dealer', picture: ''
    },
    {
      id: 2, name: 'Wendy', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Laura_Linney_Berlinale_2017.jpg/220px-Laura_Linney_Berlinale_2017.jpg'
    },
    {
      id: 3, name: 'Marty', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Jason_Bateman_2011.jpg/220px-Jason_Bateman_2011.jpg'
    }
  ]

  const selected: actorMovieDTO[] = [];

  const [draggedElement, setDraggedElement] = useState<actorMovieDTO | undefined>(undefined)

  function handleDragStart(actor: actorMovieDTO) {
    setDraggedElement(actor)
  }

  function handleDragOver(actor: actorMovieDTO) {
    if (!draggedElement) {
      return
    }

    if (actor.id !== draggedElement.id) {
      const draggedElementIndex = props.actors.findIndex(x => x.id === draggedElement.id)
      const actorIndex = props.actors.findIndex(x => x.id === actor.id)

      const actors = [...props.actors]
      actors[actorIndex] = draggedElement
      actors[draggedElementIndex] = actor
      props.onAdd(actors)
    }
  }
  
  return (
    <div className="mb-3">
      <label htmlFor="">{props.displayName}</label>
      <Typeahead
        options={actors}
        id="typeahead"
        onChange={actors => {

          if (props.actors.findIndex(x => x.id === actors[0].id) === -1) {
            props.onAdd([...props.actors, actors[0]])
          }
        }}
        labelKey={actor => actor.name}
        filterBy={['name']}
        placeholder="Write the name of the actor..."
        minLength={1}
        flip={true}
        selected={selected}
        renderMenuItemChildren={actor => (
          <>
          <img
            src={actor.picture}
            style={{
              height: 64,
              marginRight: 10,
              width: 64
            }}
          />
          <span>{actor.name}</span>
        </>
        )}
      />
      <ul className="list-group">
        {props.actors.map(actor => 
        <li key={actor.id}

          draggable={true}
          onDragStart={() => handleDragStart(actor)}
          onDragOver ={() => handleDragOver(actor)}
        
          className="list-group-item list-group-item-action"
        >
          {props.listUI(actor)}
          <span className="badge badge-promary text-dark badge-pill pointer"
          style={{marginLeft: '0.5rem'}}
          onClick={() => props.onRemove(actor)}
          >x</span>
        </li>)} 
      </ul>
    </div>
  )
}

interface typeAheadActorsProps {
  displayName: string;
  actors: actorMovieDTO[];
  onAdd(actors: actorMovieDTO[]): void;
  onRemove(actor: actorMovieDTO): void;
  listUI(actor: actorMovieDTO): ReactElement;
}