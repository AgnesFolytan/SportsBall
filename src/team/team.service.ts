import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TeamService {

  db: PrismaService;

  constructor(db: PrismaService){
    this.db = db;
  }

  create(createTeamDto: CreateTeamDto) {
    return this.db.team.create({
      data: createTeamDto
    })
  }

  async findAll() {
    return await this.db.team.findMany();
  }

  async getAllTeamWithPlayers(){
    return await this.db.team.findMany({
      where: {players: {some: {}}}, include: {players: true}
    })
  }

  addPlayer(teamid: number, playerid: number){
    return this.db.team.update({
      where: {id: teamid},
      data: {players: {connect: {id: playerid}}}
    })
  }

  removePlayer(teamid: number, playerid: number){
    return this.db.team.update({
      where: {id: teamid},
      data: {players: {disconnect: {id: playerid}}}
    })
  }

  findOne(id: number) {
    return this.db.team.findUnique({
      where: {
        id
      }, include: {players: true}
    });
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    try{
      return await this.db.team.update({
        where: {id},
        data: updateTeamDto
      })
    } catch{
      return undefined;
    }
  }

  async remove(id: number) {
    try{
      return await this.db.team.delete({
        where: {
          id
        }
      })
    } catch {
      return undefined;
    }
  }
}
