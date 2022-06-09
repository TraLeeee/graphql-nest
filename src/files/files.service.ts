import { Injectable } from '@nestjs/common';
import { CreateFileInput } from './dto/create-file.input';
import { UpdateFileInput } from './dto/update-file.input';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from '../entities/file.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(File)
    private filesRepository: Repository<File>,
  ) {}

  create(createFileInput: CreateFileInput) {
    return this.filesRepository.save(createFileInput);
  }

  findAll() {
    return `This action returns all files`;
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }

  update(id: number, updateFileInput: UpdateFileInput) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
