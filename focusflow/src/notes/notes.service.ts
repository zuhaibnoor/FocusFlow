import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { note } from './note.entity';



@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(note)
    private readonly notesRepository: Repository<note>,
  ) {}

  async create(title: string, content: string) {
    const note = this.notesRepository.create({
      title,
      content,
      isCompleted: false,
    });

    return this.notesRepository.save(note);
  }

  async findAll() {
    return this.notesRepository.find();
  }

  async findOne(id: number) {
    return this.notesRepository.findOneBy({ id });
  }

  async update(id: number, title: string, content: string) {
    const note = await this.findOne(id);
    if (!note) {
      throw new NotFoundException(`Note with id: ${id}`)
    };

    note.title = title;
    note.content = content;

    return this.notesRepository.save(note);
  }

  async delete(id: number) {
    await this.notesRepository.delete(id);
    return this.findAll();
  }
}
