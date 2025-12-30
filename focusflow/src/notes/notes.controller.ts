import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService){}

    @Get()
    findAll(){
        return this.notesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.notesService.findOne(Number(id));
    }
    
    @Delete(':id')
    delete(@Param('id') id:string){
        return this.notesService.delete(Number(id));
    }
    
    @Post()
    create(@Body() body : {title: string, content: string}){
        return this.notesService.create(body.title, body.content);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() body: {title: string, content: string}){
        return this.notesService.update(Number(id), body.title, body.content);
    }
}
