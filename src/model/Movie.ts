export interface Movie {
    title?: string;
    release_date: string;
    vote_average: number;
    overview?: string;
    genres?: string[];
    poster_path?: string|null;
}

