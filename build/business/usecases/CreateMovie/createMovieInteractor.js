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
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = require("./../../entities/Movie");
const generateRandomId_1 = require("../../utils/generateRandomId");
const missingInformationError_1 = require("../../entities/error/missingInformationError");
class CreateMovieInteractor {
    constructor(movieGateway, idGenerator) {
        this.movieGateway = movieGateway;
        this.idGenerator = generateRandomId_1.generateRandomId();
    }
    ;
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const movie = new Movie_1.Movie(generateRandomId_1.generateRandomId(), input.title, input.date, input.lenght, input.synopsis, input.link, input.picture);
            if (!movie.getId() ||
                !input.title ||
                !input.date ||
                !input.lenght ||
                !input.link ||
                !input.picture ||
                !input.synopsis) {
                throw new missingInformationError_1.MissingInformationError;
            }
            yield this.movieGateway.saveMovie(movie);
            const response = {
                success: true
            };
            return response;
        });
    }
    ;
}
exports.CreateMovieInteractor = CreateMovieInteractor;
;
;
