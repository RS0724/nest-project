import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService as UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { requestTokenRecoverPasswordDto } from './dto/requestTokenRecoverPassword.dto';

@ApiTags('User')
@Controller('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo usúario' })
  create(@Body() createAuthDto: CreateUserDto) {
    try {
      return this.userService.create(createAuthDto);
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Pesquisa todos os usuários' })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Pesquisa um usuário por id' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Alterar dados do usuário' })
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
    return this.userService.update(id, updateAuthDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Deletar um usuário' })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Post('recover')
  @ApiOperation({ summary: 'Solicitar token de recuperação de senha' })
  async requestTokenRecoverPassword(
    @Body() dto: requestTokenRecoverPasswordDto,
  ) {
    return this.userService.createTokenRecoverPassword(dto.email);
  }
}
