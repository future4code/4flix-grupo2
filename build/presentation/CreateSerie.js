"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createSerieInteractor_1 = require("./../business/usecases/CreateSerie/createSerieInteractor");
const serieDatabase_1 = require("./../data/serieDatabase");
const express_1 = __importDefault(require("express"));
const generateRandomId_1 = require("../business/utils/generateRandomId");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
app.post('/createSerie', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const serieGateway = new serieDatabase_1.SerieDatabase();
    const idGenerator = generateRandomId_1.generateRandomId();
    const useCase = new createSerieInteractor_1.CreateSerieInteractor(serieGateway, idGenerator);
    const input = {
        title: request.body.title,
        date: request.body.date,
        synopsis: request.body.synopsis,
        link: request.body.link,
        picture: request.body.picture,
        episodes: request.body.episodes
    };
    yield useCase.execute(input);
    response.send({
        Message: "Serie cadastrada com sucesso!"
    });
}));
