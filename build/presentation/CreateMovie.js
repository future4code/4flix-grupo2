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
const express_1 = __importDefault(require("express"));
const createMovieInteractor_1 = require("../business/usecases/CreateMovie/createMovieInteractor");
const generateRandomId_1 = require("../business/utils/generateRandomId");
const movieDatabase_1 = require("../data/movieDatabase");
exports.app = express_1.default();
exports.app.use(express_1.default.json()); // Linha mágica (middleware)
exports.app.post('/movie', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const movieGateway = new movieDatabase_1.MovieDatabase();
    const idGenerator = generateRandomId_1.generateRandomId();
    const useCase = new createMovieInteractor_1.CreateMovieInteractor(movieGateway, idGenerator);
    const input = {
        title: request.body.title,
        date: request.body.date_,
        lenght: request.body.lenght,
        synopsis: request.body.synopsis,
        link: request.body.link,
        picture: request.body.picture
    };
    console.log(request.body);
    const result = yield useCase.execute(input);
    response.send(Object.assign(Object.assign({}, result), { success: true, message: "Filme cadastrado com sucesso" }));
}));
exports.default = exports.app;
