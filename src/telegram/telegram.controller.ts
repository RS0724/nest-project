import { Body, Controller, Post } from '@nestjs/common';
import { telegramService } from './telegram.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { sendMessageDto } from './dto/sendMessage.dto';

@ApiTags('Telegram')
@Controller('telegram')
export class TelegramContorller {
  constructor(private readonly telegramService: telegramService) {}

  @Post('send')
  @ApiOperation({summary: "enviar mensagem telegram"})
  sendMessage(
    @Body() dtoMessage: sendMessageDto
  ) {
    this.telegramService.sendTelegrafText(dtoMessage)
  }
}
