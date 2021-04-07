import { v4 as uuidv4 } from 'uuid';
export class NoteModel {
    public id: string;
    public eventId: string;
    public text: string;

    constructor(text: string = "", eventId: string = "") {
        this.id = uuidv4();
        this.text = text;
        this.eventId = eventId
    }

    isValid(): boolean {
        if (this.text == "") {
            return false
        }
        else {
            return true;
        }
    }
}