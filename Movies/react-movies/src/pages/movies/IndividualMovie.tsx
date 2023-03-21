// component for individual movie:

import { movieDTO } from "./movies.model";
import css from "./IndividualMovie.module.css"

export default function IndividualMovie(props: movieDTO) {
    
    const buildLink = () => `/movie/${props.id}`
  
    return (
      <div className={css.div}>
        <a href={buildLink()}>
          <img src={props.poster} alt="" />
          <p>{props.title}</p>
        </a>
      </div>
    )
}