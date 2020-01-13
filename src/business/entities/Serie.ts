import { Episode } from './Episode';

export class Serie {
    constructor (
        private id: string, 
        private title: string,
        private date: string, 
        private synopsis: string,
        private link: string, 
        private picture: string,
        private episodes: Episode[]
    ) {}

    public getId() {
        return this.id
    };

    public getTitle() {
        return this.title
    }

    public getDate() {
        return this.date
    }

    public getSynopsis() {
        return this.synopsis
    }
   
    public getLink() {
        return this.link
    }

    public getPicture() {
        return this.picture
    }

    public getEpisodes() {
        return this.episodes
    }
};