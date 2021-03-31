import { v4 as uuidv4 } from 'uuid';
export class EventModel {
    public id: string;
    public title: string;
    public description: string;
    public date: string;
    public image: string;
    public isPriority: boolean;
    public isHidden: boolean = false;

    constructor(title: string, description: string, date: string, image: string, isPriority: boolean) {
        this.id = uuidv4();
        this.title = title;
        this.date = date;
        this.description = description;
        this.image = image;
        this.isPriority = isPriority;
    }
}