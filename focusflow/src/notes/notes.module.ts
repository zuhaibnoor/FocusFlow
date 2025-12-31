import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { note } from './note.entity';


@Module({
  imports: [TypeOrmModule.forFeature([note])],
  controllers: [NotesController],
  providers: [NotesService]
})
export class NotesModule {}
