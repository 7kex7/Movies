import { movieDTO } from "./movies.model";
import IndividualMovie from "./IndividualMovie"
import css from "./moviesList.module.css"
import GenericList from "../../components/GenericListComponent";

export default function MoviesList(props: moviesListProps) {
  return (
    <GenericList list={props.movies}>
      <div className={css.div}>
        {props.movies?.map(movie => 
          <IndividualMovie {...movie} key={movie.id}/>
        )}
      </div>
    </GenericList>
  )
}

interface moviesListProps {
    movies?: movieDTO[];
}
