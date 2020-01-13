export class Movie {
    constructor (
        private id: string, 
        private title: string,
        private date: string, 
        private lenght: string,
        private synopsis: string,
        private link: string, 
        private picture: string
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

    public getLenght() {
        return this.lenght
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
};