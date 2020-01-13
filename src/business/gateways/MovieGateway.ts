import { Movie } from "../entities/Movie"

export interface MovieGateway {
    saveMovie(movie: Movie): Promise<void>
};