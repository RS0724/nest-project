import { Body, Controller, Post } from '@nestjs/common';
import { telegramService } from './telegram.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SendMessageDto } from './dto/sendMessage.dto';

@ApiTags('Telegram')
@Controller('telegram')
export class TelegramContorller {
  constructor(private readonly telegramService: telegramService) {}

  @Post('send')
  @ApiOperation({summary: "enviar mensagem telegram"})
  async sendMessage(@Body() dtoMessage: SendMessageDto) {
    await this.telegramService.sendMessageSwitch(dtoMessage);
  }

  }

