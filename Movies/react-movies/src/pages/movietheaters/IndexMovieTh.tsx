import { Link } from "react-router-dom"
import { MOVIETH_ADD, MOVIETH_EDIT } from "../../routing/paths"

export default function IndexMovieTh() {
  return (
    <>
    <h3>Movie Theathers</h3>
      <Link
        to={MOVIETH_ADD}
        className="btn btn-primary"
      >
        add movie theater
      </Link>
    </>
  )
}
