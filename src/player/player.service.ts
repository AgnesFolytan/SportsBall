import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlayerService {

  db: PrismaService;

  constructor(db: PrismaService) {
    this.db = db;
  }
  
  create(createPlayerDto: CreatePlayerDto) {
    return this.db.player.create({
      data: {
        name: createPlayerDto.name,
        goalCount: createPlayerDto.goalCount,
        birthDate: createPlayerDto.birthDate + "T00:00:00.00Z"

      }
    });
  }

  async findAll() {
    return await this.db.player.findMany();
  }

  findOne(id: number) {
    return this.db.player.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    try{
      return await this.db.player.update({
        where: {id},
        data: updatePlayerDto
      })
    }catch {
      return undefined;
    }
  }

  async remove(id: number) {
    try{
      return await this.db.player.delete({
        where: {id}
      })
    } catch {
      return undefined;
    }
  }
}
