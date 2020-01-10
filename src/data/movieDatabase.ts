import knex from 'knex'
import { Movie } from '../business/entities/Movie'
import { MovieGateway } from '../business/gateways/MovieGateway'

interface MovieModel {
    id: string,
    title: string,
    date_: string,
    lenght: string,
    synopsis: string,
    link: string,
    picture: string
}

export class MovieDatabase implements MovieGateway {
    private connection: knex

    constructor() {
        this.connection = knex({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'bruno',
                password: process.env.SENHA_MOVIE,
                database: 'bruno'
            }
        })
    }

    async saveMovie(movie:Movie):Promise<void> {
        if(!movie.getId()) {
            throw new Error('Não tem id')
        }
    }
}