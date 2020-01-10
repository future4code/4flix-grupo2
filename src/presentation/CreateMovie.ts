import express, { Request, Response } from 'express'
import { CreateMovieInteractor, CreateMovieInput } from '../business/usecases/CreateMovie/createMovieInteractor'
import { generateRandomId } from '../business/utils/generateRandomId'
import { MovieDatabase } from '../data/movieDatabase'


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/createmovie', async (request: Request, response: Response) => {
    const movieGateway = new MovieDatabase()
    const idGenerator = generateRandomId()
    const useCase = new CreateMovieInteractor(movieGateway, idGenerator)

    const input: CreateMovieInput = {
        title: request.body.title,
        date: request.body.date,
        lenght: request.body.lenght,
        synopsis: request.body.synopsis,
        link: request.body.link,
        picture: request.body.picture
    }

    await useCase.execute(input)

    response.send({
        Message: " Filme cadastrado com sucesso!"
    })
})
export default app