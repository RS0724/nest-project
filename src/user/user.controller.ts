import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService as UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({summary: 'Criar novo usúario'})
  create(@Body() createAuthDto: CreateUserDto) {
    try {
      return this.userService.create(createAuthDto);      
    } catch (error) {
     console.log(error) 
    }
  }

  @Get()
  @ApiOperation({summary: 'Pesquisa todos os usuários'})
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Pesquisa um usuário por id'})
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Alterar dados do usuário'})
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
    return this.userService.update(id, updateAuthDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Deletar um usuário'})
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
