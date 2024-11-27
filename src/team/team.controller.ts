import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Get('players')
  async getAllTeamWithPlayers() {
    return this.teamService.getAllTeamWithPlayers();
  }

  @Post(':teamid/addPlayer/:playerid')
  addPlayer(@Param('teamid') teamid: string, @Param('playerid') playerid: string){
    return this.teamService.addPlayer(+teamid, +playerid);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(+id, updateTeamDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }
}
