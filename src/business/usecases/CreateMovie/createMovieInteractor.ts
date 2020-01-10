import { Movie } from './../../entities/Movie';
import { MovieGateway } from './../../gateways/MovieGateway';
import { generateRandomId } from '../../utils/generateRandomId';
import { MissingInformationError } from '../../entities/error/missingInformationError';

export class CreateMovieInteractor {
    private movieGateway: MovieGateway
    private idGenerator: string

    constructor(movieGateway: MovieGateway,idGenerator: string) {
        this.movieGateway = movieGateway
        this.idGenerator = generateRandomId()
    };

    async execute(input: CreateMovieInput) {

        const movie = new Movie(this.idGenerator, input.title, input.date, input.lenght, input.synopsis, input.link, input.picture);

        if (!movie.getId() ||
            !input.title ||
            !input.date ||
            !input.lenght ||
            !input.link ||
            !input.picture ||
            !input.synopsis
        ) {
            throw new MissingInformationError;
        }

        await this.movieGateway.saveMovie(movie)

        const response = {
            success: true
        }

        return response

    };
};

export interface CreateMovieInput {
    title: string,
    date: string,
    lenght: string,
    synopsis: string,
    link: string,
    picture: string
};
