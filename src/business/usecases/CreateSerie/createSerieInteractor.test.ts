import { CreateSerieInteractor, CreateSerieInput } from './createSerieInteractor';
import { Serie } from './../../entities/Serie';
import { SerieGateway } from './../../gateways/SerieGateway';
import { generateRandomId } from '../../utils/generateRandomId';


test("testing execute function", async () => {
    const serieGateway: SerieGateway = {
        saveSerie(serie: Serie): Promise<void> {
            return Promise.resolve()
        }
    };

    const useCase = new CreateSerieInteractor(serieGateway)
    const input: CreateSerieInput = { 
        id: generateRandomId(),
        title: "Rick and Morty",
        date: "2019/08/09",
        synopsis: "jfaljdsajdsalkdjs",
        link: "url",
        picture: "url",
        episodes: [
            {
                id: generateRandomId(),
                title: "Lawnmower Dog",
                length: "21 min",
                link: "www.linkfalso.com.br",
                picture: "www.linkfalso.com",
                synopsis: "Rick cria um dispositivo que deixa o cachorro da família mais inteligente. Além disso, ele também invade os sonhos do professor de matemática do Morty",
            }
        ]
    };

    const result = await useCase.execute(input)

    expect(result).toBe("Serie cadastrada com sucesso!")
});

//comentário para adicionar um pr novo 
