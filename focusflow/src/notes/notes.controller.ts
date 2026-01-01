import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { NotesService } from './notes.service';
import { ParseIntPipe } from '@nestjs/common';
import { UpdateNoteDto } from './dto/update-note.dto';
import { CreateNoteDto } from './dto/create-note.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  async findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ) id: string) {
    return this.notesService.findOne(Number(id));
  }

  @Post()
  async create(@Body() body: CreateNoteDto) {
    return this.notesService.create(body.title, body.content);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() body: UpdateNoteDto,
  ) {
    return this.notesService.update(Number(id), body.title, body.content);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.notesService.delete(Number(id));
  }
}
