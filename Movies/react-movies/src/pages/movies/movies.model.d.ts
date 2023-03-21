// "... .d. ... in the name of the file means
// the file is going to be a "type definition file"

// интерфейс "movieDTO" нужен для указания
// DTO => data transfer object
// тип данных для одного постера кино
export interface movieDTO {
    id: number;
    title: string;
    poster: string; // url
}

export interface movieCreationDTO {
    title: string;
    inTheaters: boolean; // url
    trailer: string;
    releaseDate?: Date;
    poster?: File;
    posterURL?: string;
    genresIds?: number[];
    movieTheatersIds?: number[];
    actors?: actorMovieDTO[];
}

export interface landingPageDTO {
    inTheaters?: movieDTO[];
    upcomingReleases?: movieDTO[];
}
