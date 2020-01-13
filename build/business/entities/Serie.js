"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Serie {
    constructor(id, title, date, synopsis, link, picture, episodes) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.synopsis = synopsis;
        this.link = link;
        this.picture = picture;
        this.episodes = episodes;
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
    getSynopsis() {
        return this.synopsis;
    }
    getLink() {
        return this.link;
    }
    getPicture() {
        return this.picture;
    }
    getEpisodes() {
        return this.episodes;
    }
}
exports.Serie = Serie;
;
