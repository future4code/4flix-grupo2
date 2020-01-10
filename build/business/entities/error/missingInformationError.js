"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customError_1 = require("./customError");
class MissingInformationError extends customError_1.CustomError {
    constructor(message = "Information is missing") {
        super(message, 405);
    }
}
exports.MissingInformationError = MissingInformationError;
