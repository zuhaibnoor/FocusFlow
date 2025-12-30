import { Injectable } from '@nestjs/common';



@Injectable()
export class NotesService {
    private notes: any[] = []

    private idCounter = 1

    create(title: string, content: string){
        const note = {
            id: this.idCounter++,
            title,
            content,
            isCompleted: false,
        };

        this.notes.push(note)
        return this.notes;
    }

    findAll(){
        return this.notes;
    }

    findOne(id: number){
        return this.notes.find(note => note.id === id);
    }

    update(id:number, title: string, content:string){
        const note = this.findOne(id);
        if(note){
            note.title = title;
            note.content = content;
            return note;
        }
    }

    delete(id:number){
        this.notes = this.notes.filter(note => note.id !== id);
        return this.notes;
    }

    
}
