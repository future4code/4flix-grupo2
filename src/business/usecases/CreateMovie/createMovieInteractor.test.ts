import { CreateMovieInteractor, CreateMovieInput } from './createMovieInteractor';
import { Movie } from '../../entities/Movie';
import { MovieGateway } from '../../gateways/MovieGateway';
import { generateRandomId } from '../../utils/generateRandomId';
import { MissingInformationError } from '../../entities/error/missingInformationError';


test("testing execute function", async () => {
    const movieGateway: MovieGateway = {
        saveMovie(movie: Movie): Promise<void> {
            return Promise.resolve()
        }
    };

    const useCase = new CreateMovieInteractor(movieGateway)
    const input: CreateMovieInput = {
        id: generateRandomId(),
        title: "Bastardos Inglórios",
        date: "2019/08/09",
        lenght: "153 min",
        synopsis: "jfaljdsajdsalkdjs",
        link: "url",
        picture: "url"
    };

    const result = await useCase.execute(input)

    expect(result).toBe("Filme cadastrado com sucesso!")
});

const movieGatewayMock:MovieGateway = {
    saveMovie: jest.fn()
};

const buildCreateMovieInteractor = () =>{
    return new CreateMovieInteractor(movieGatewayMock)
}

test("testing error message", async () => {

    const CreateMoveUseCase = buildCreateMovieInteractor()

    const input: CreateMovieInput = {
        id: generateRandomId(),
        title: "Bastardos Inglórios",
        date: "2019/08/09",
        lenght: "",
        synopsis: "jfaljdsajdsalkdjs",
        link: "url",
        picture: "url"
    };

    expect(CreateMoveUseCase.execute(input))
    .rejects
    .toThrow(new MissingInformationError())
})