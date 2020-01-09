import { Movie } from './../../entities/Movie';
import { MovieGateway } from './../../gateways/MovieGateway';
import { generateRandomId } from '../../utils/generateRandomId';
import { MissingInformationError } from '../../entities/error/missingInformationError';

export class CreateMovieInteractor {
    private movieGateway: MovieGateway

    constructor(movieGateway: MovieGateway) {
        this.movieGateway = movieGateway
    };

    async execute(input: CreateMovieInput) {

        const movie = new Movie(generateRandomId(), input.title, input.date, input.lenght, input.synopsis, input.link, input.picture);

        if (!input.id ||
            !input.title ||
            !input.date ||
            !input.lenght ||
            !input.link ||
            !input.picture ||
            !input.synopsis
            ) {
            return new MissingInformationError();
        }

        await this.movieGateway.saveMovie(movie)

        const response = "Filme cadastrado com sucesso!"

        return response

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
