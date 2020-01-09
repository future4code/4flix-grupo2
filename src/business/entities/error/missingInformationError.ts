import { CustomError } from "./customError";

export class MissingInformationError extends CustomError {
  constructor(message: string = "Information is missing") {
    super(message, 405);
  }
}
