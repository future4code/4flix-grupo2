import { SerieGateway } from './../business/gateways/SerieGateway';
import knex from "knex";
import { Serie } from '../business/entities/Serie';

export class SerieDatabase implements SerieGateway {
    private connection: knex; 

    constructor() {
        this.connection = knex({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'bruno',
                password: process.env.SENHA_MOVIE,
                database: 'bruno'
            }
        });
    };

    async saveSerie(serie: Serie):Promise<void> {
        if(!serie.getId()) {
            throw new Error('Não tem id')
        };
    };
};