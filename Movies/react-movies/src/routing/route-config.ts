import {
    HOME_PAGE,
    GENRES_PAGE,
    GENRES_CREATE,
    GENRES_EDIT,
    ACTOR_PAGE,
    ACTOR_CREATE,
    ACTOR_EDIT,
    MOVIETH_PAGE,
    MOVIETH_ADD,
    MOVIETH_EDIT,
    MOVIE_PAGE,
    MOVIE_CREATE,
    MOVIE_FILTER,
    MOVIE_EDIT
} from './paths'

import Home from '../pages/Home'
import IndexGenres from '../pages/genres/IndexGenres'
import CreateGenre from '../pages/genres/CreateGenre'
import EditGenre from '../pages/genres/EditGenre'
import IndexActor from '../pages/actors/IndexActor'
import CreateActor from '../pages/actors/CreateActor'
import EditActor from '../pages/actors/EditActor'
import IndexMovieTh from '../pages/movietheaters/IndexMovieTh'
import CreateMovieTh from '../pages/movietheaters/CreateMovieTh'
import EditMovieTh from '../pages/movietheaters/EditMovieTh'
import CreateMovie from '../pages/movies/CreateMovie'
import FilterMovies from '../pages/movies/FilterMovies'
import EditMovie from '../pages/movies/EditMovie'

export const routes = [
    { path: HOME_PAGE, element: Home },
    
    { path: GENRES_PAGE, element: IndexGenres},
    { path: GENRES_CREATE, element: CreateGenre},
    { path: GENRES_EDIT, element: EditGenre},
    
    { path: ACTOR_PAGE, element: IndexActor},
    { path: ACTOR_CREATE, element: CreateActor},
    { path: ACTOR_EDIT, element: EditActor},
    
    { path: MOVIETH_PAGE, element: IndexMovieTh},
    { path: MOVIETH_ADD, element: CreateMovieTh},
    { path: MOVIETH_EDIT, element: EditMovieTh},
    
    { path: MOVIE_PAGE, element: EditMovie},
    { path: MOVIE_EDIT, element: EditMovie},
    { path: MOVIE_CREATE, element: CreateMovie},
    { path: MOVIE_FILTER, element: FilterMovies},
]
