export interface Movie {
    title: string;
    release_date: string;
    runtime: number;
    overview: string;
    genres?: string[];
    poster_path: string;
}