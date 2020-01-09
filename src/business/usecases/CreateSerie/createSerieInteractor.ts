import { Serie } from './../../entities/Serie';
import { SerieGateway } from './../../gateways/SerieGateway';
import { Episode } from './../../entities/Episode';
import { generateRandomId } from '../../utils/generateRandomId';
import { MissingInformationError } from '../../entities/error/missingInformationError';


export class CreateSerieInteractor {
    private serieGateway: SerieGateway

    constructor(serieGateway: SerieGateway) {
        this.serieGateway = serieGateway
    };

    async execute(input: CreateSerieInput) {

        const serie = new Serie(generateRandomId(), input.title, input.date, input.synopsis, input.link, input.picture, input.episodes);

        if (!serie.getId() ||
            !input.title ||
            !input.date ||
            !input.link ||
            !input.picture ||
            !input.synopsis ||
            !input.episodes
        ) {
            throw new MissingInformationError;
        }

        input.episodes.map(episode => {
            if (!episode.id ||
                !episode.length ||
                !episode.link ||
                !episode.picture ||
                !episode.synopsis ||
                !episode.title
            ) {
                throw new MissingInformationError
            }
        })

        await this.serieGateway.saveSerie(serie)
        const response = {
           success:true 
        }

        return response

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
