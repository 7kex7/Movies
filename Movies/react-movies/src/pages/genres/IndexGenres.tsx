import { Link } from "react-router-dom"
import { GENRES_CREATE, GENRES_EDIT } from "../../routing/paths"


export default function IndexGenres() {
    return (
        <>
            <h3>Genres</h3>
            <Link
                to={GENRES_CREATE}
                className="btn btn-primary"
            >
                Create genre
            </Link>
        </>
    )
}