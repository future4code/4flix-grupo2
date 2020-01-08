import { Serie } from './../../entities/Serie';
import { SerieGateway } from './../../gateways/SerieGateway';
import { Episode } from './../../entities/Episode';
import { generateRandomId } from '../../utils/generateRandomId';


export class CreateSerieInteractor {
    private serieGateway: SerieGateway

    constructor(serieGateway: SerieGateway) {
        this.serieGateway = serieGateway
    };

    async execute(input: CreateSerieInput) {
        try {
            const serie = new Serie(generateRandomId(), input.title, input.date, input.synopsis, input.link, input.picture, input.episodes);

            await this.serieGateway.saveSerie(serie)
            const response = "Serie cadastrada com sucesso!"

            return response
        } catch (e) {
            return e
        };
    };
};


export interface CreateSerieInput {
    id: string,
    title: string,
    date: string,
    synopsis: string,
    link: string,
    picture: string,
    episodes: Episode[]
};
