import { Serie } from './../entities/Serie';

export interface SerieGateway {
    saveSerie(Serie: Serie): Promise<void>
};