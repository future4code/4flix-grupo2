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
const createSerieInteractor_1 = require("./createSerieInteractor");
const generateRandomId_1 = require("../../utils/generateRandomId");
const missingInformationError_1 = require("../../entities/error/missingInformationError");
test("testing create serie use case", () => __awaiter(void 0, void 0, void 0, function* () {
    const serieGateway = {
        saveSerie(serie) {
            return Promise.resolve();
        }
    };
    const useCase = new createSerieInteractor_1.CreateSerieInteractor(serieGateway, generateRandomId_1.generateRandomId());
    const input = {
        title: "Rick and Morty",
        date: "2019/08/09",
        synopsis: "jfaljdsajdsalkdjs",
        link: "url",
        picture: "url",
        episodes: [
            {
                id: generateRandomId_1.generateRandomId(),
                title: "Lawnmower Dog",
                length: "21 min",
                link: "www.linkfalso.com.br",
                picture: "www.linkfalso.com",
                synopsis: "Rick cria um dispositivo que deixa o cachorro da família mais inteligente. Além disso, ele também invade os sonhos do professor de matemática do Morty",
            }
        ]
    };
    const result = yield useCase.execute(input);
    expect(result.success).toBe(true);
}));
const serieGatewayMock = {
    saveSerie: jest.fn()
};
const buildCreateSerieInteractor = () => {
    return new createSerieInteractor_1.CreateSerieInteractor(serieGatewayMock, generateRandomId_1.generateRandomId());
};
test("testing error message", () => __awaiter(void 0, void 0, void 0, function* () {
    const CreateSerieUseCase = buildCreateSerieInteractor();
    const input = {
        title: "Rick and Morty",
        date: "2019/08/09",
        synopsis: "jfaljdsajdsalkdjs",
        link: "",
        picture: "url",
        episodes: [
            {
                id: generateRandomId_1.generateRandomId(),
                title: "Lawnmower Dog",
                length: "21 min",
                link: "www.linkfalso.com.br",
                picture: "www.linkfalso.com",
                synopsis: "Rick cria um dispositivo que deixa o cachorro da família mais inteligente. Além disso, ele também invade os sonhos do professor de matemática do Morty",
            }
        ]
    };
    expect(CreateSerieUseCase.execute(input))
        .rejects
        .toThrow(new missingInformationError_1.MissingInformationError());
}));
test("testing episodes empty properties", () => {
    const CreateSerieUseCase = buildCreateSerieInteractor();
    const input = {
        title: "Rick and Morty",
        date: "2019/08/09",
        synopsis: "jfaljdsajdsalkdjs",
        link: "url",
        picture: "url",
        episodes: [
            {
                id: generateRandomId_1.generateRandomId(),
                title: "",
                length: "21 min",
                link: "www.linkfalso.com.br",
                picture: "www.linkfalso.com",
                synopsis: "Rick cria um dispositivo que deixa o cachorro da família mais inteligente. Além disso, ele também invade os sonhos do professor de matemática do Morty",
            }
        ]
    };
    expect(CreateSerieUseCase.execute(input))
        .rejects
        .toThrow(new missingInformationError_1.MissingInformationError());
});
