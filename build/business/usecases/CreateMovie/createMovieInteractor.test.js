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
const createMovieInteractor_1 = require("./createMovieInteractor");
const generateRandomId_1 = require("../../utils/generateRandomId");
const missingInformationError_1 = require("../../entities/error/missingInformationError");
test("testing create movie use case", () => __awaiter(void 0, void 0, void 0, function* () {
    const movieGateway = {
        saveMovie(movie) {
            return Promise.resolve();
        }
    };
    const useCase = new createMovieInteractor_1.CreateMovieInteractor(movieGateway, generateRandomId_1.generateRandomId());
    const input = {
        title: "Bastardos Inglórios",
        date: "2019/08/09",
        lenght: "153 min",
        synopsis: "jfaljdsajdsalkdjs",
        link: "url",
        picture: "url"
    };
    const result = yield useCase.execute(input);
    expect(result.success).toBe(true);
}));
const movieGatewayMock = {
    saveMovie: jest.fn()
};
const buildCreateMovieInteractor = () => {
    return new createMovieInteractor_1.CreateMovieInteractor(movieGatewayMock, generateRandomId_1.generateRandomId());
};
test("testing error message", () => __awaiter(void 0, void 0, void 0, function* () {
    const CreateMoveUseCase = buildCreateMovieInteractor();
    const input = {
        title: "Bastardos Inglórios",
        date: "2019/08/09",
        lenght: "",
        synopsis: "jfaljdsajdsalkdjs",
        link: "url",
        picture: "url"
    };
    expect(CreateMoveUseCase.execute(input))
        .rejects
        .toThrow(new missingInformationError_1.MissingInformationError());
}));
