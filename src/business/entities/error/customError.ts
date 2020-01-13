export abstract class CustomError extends Error {
    constructor(message: string, private code: number) {
        super(message);
    }
}
