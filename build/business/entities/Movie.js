"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Movie {
    constructor(id, title, date, lenght, synopsis, link, picture) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.lenght = lenght;
        this.synopsis = synopsis;
        this.link = link;
        this.picture = picture;
    }
    getId() {
        return this.id;
    }
    ;
    getTitle() {
        return this.title;
    }
    getDate() {
        return this.date;
    }
    getLenght() {
        return this.lenght;
    }
    getSynopsis() {
        return this.synopsis;
    }
    getLink() {
        return this.link;
    }
    getPicture() {
        return this.picture;
    }
}
exports.Movie = Movie;
;
