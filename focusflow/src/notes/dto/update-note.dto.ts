import { IsNumber, IsString, IsNotEmpty, IsOptional } from 'class-validator'

export class UpdateNoteDto {

    @IsNumber()
    @IsOptional()
    id: number
    
    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    content: string

}