export interface Movie {
    title?: string;
    release_date: string;
    popularity: number;
    overview?: string;
    genres?: string[];
    poster_path?: string|null;
}

