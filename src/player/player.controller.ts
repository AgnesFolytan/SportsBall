import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @Get()
  async findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playerService.update(+id, updatePlayerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.playerService.remove(+id);
  }
}
