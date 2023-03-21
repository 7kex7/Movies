import { Link } from "react-router-dom"
import { ACTOR_CREATE } from "../../routing/paths"

export default function IndexActor() {
  return (
    <>
      <h3>Actors</h3>
      <Link
        to={ACTOR_CREATE}
        className="btn btn-primary"
      >
        create actor
      </Link>
    </>
  )
}
