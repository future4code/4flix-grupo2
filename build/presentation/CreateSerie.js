"use strict";
// import { CreateSerieInteractor, CreateSerieInput } from './../business/usecases/CreateSerie/createSerieInteractor';
// import { SerieDatabase } from './../data/serieDatabase';
// import express, { Request, Response } from 'express'
// import { generateRandomId } from '../business/utils/generateRandomId'
// const app = express()
// app.use(express.json()) // Linha mágica (middleware)
// app.post('/serie', async (request: Request, response: Response) => {
//     const serieGateway = new SerieDatabase();
//     const idGenerator = generateRandomId();
//     const useCase = new CreateSerieInteractor(serieGateway, idGenerator)
//     const input: CreateSerieInput = {
//         title: request.body.title,
//         date: request.body.date,
//         synopsis: request.body.synopsis,
//         link: request.body.link,
//         picture: request.body.picture,
//         episodes: request.body.episodes
//     };
//     await useCase.execute(input);
//     response.send({
//         Message: "Serie cadastrada com sucesso!"
//     })
// });
// export default app
