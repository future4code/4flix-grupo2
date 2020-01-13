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
const Serie_1 = require("./../../entities/Serie");
const missingInformationError_1 = require("../../entities/error/missingInformationError");
class CreateSerieInteractor {
    constructor(serieGateway, idGenerator) {
        this.serieGateway = serieGateway;
        this.idGenerator = idGenerator;
    }
    ;
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const serie = new Serie_1.Serie(this.idGenerator, input.title, input.date, input.synopsis, input.link, input.picture, input.episodes);
            if (!serie.getId() ||
                !input.title ||
                !input.date ||
                !input.link ||
                !input.picture ||
                !input.synopsis ||
                !input.episodes) {
                throw new missingInformationError_1.MissingInformationError;
            }
            input.episodes.map(episode => {
                if (!episode.id ||
                    !episode.length ||
                    !episode.link ||
                    !episode.picture ||
                    !episode.synopsis ||
                    !episode.title) {
                    throw new missingInformationError_1.MissingInformationError;
                }
            });
            yield this.serieGateway.saveSerie(serie);
            const response = {
                success: true
            };
            return response;
        });
    }
    ;
}
exports.CreateSerieInteractor = CreateSerieInteractor;
;
;
