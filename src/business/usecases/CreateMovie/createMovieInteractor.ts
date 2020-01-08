import { Movie } from './../../entities/Movie';
import { MovieGateway } from './../../gateways/MovieGateway';
import {generateRandomId} from '../../utils/generateRandomId';

export class CreateMovieInteractor {
    private movieGateway: MovieGateway

    constructor(movieGateway: MovieGateway) {
        this.movieGateway = movieGateway
    };

    async execute(input: CreateMovieInput) {
        try {
            const movie = new Movie(generateRandomId(), input.title, input.date, input.lenght, input.synopsis, input.link, input.picture);

            await this.movieGateway.saveMovie(movie)
            const response = "Filme cadastrado com sucesso!"

            return response
        } catch (e) {
            return e
        };
    };
};

export interface CreateMovieInput {
    id: string,
    title: string,
    date: string,
    lenght: string,
    synopsis: string,
    link: string,
    picture: string
};
