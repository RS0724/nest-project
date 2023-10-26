import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { SendMessageDto } from './dto/sendMessage.dto';
import { MediaGroup } from 'telegraf/typings/telegram-types';
import * as cron from 'node-cron'

@Injectable()
export class telegramService {
  //     token: 6817582929:AAFaA9B_1prmnon66wZmjENpOZbFgUigCtE
  //     chatId = -1002033466946

  private base64ToImage(base64: string): Buffer {
    const base64Data = base64.replace(/^data:image\/jpeg;base64,/, '');

    return Buffer.from(base64Data, 'base64');
  }

  private async sendTelegrafText({ message, chatid, tokenbot }: SendMessageDto) {
    try {
      const bot = new Telegraf(tokenbot);
      await bot.telegram.sendMessage(chatid, message);
      console.log('Mensagem enviada');
    } catch (error) {
      console.log('sendTelegrafTexto:', error);
    }
  }
  
  private async sendTelegrafMedia({
    message,
    chatid,
    tokenbot,
    images,

  }: SendMessageDto) {
    const bot = new Telegraf(tokenbot);
    const media: MediaGroup = images.map((image) => ({
      type: 'photo',
      media: { source: this.base64ToImage(image) },
      caption: '',
    }));

    media[media.length - 1].caption = message;
    console.log(media);

    await bot.telegram.sendMediaGroup(chatid, media);
    console.log('Mnesagem enviada');
  }


  private async sendMessageSwitch(sendMessageDto: SendMessageDto) {
    sendMessageDto.images
      ? this.sendTelegrafMedia(sendMessageDto)
      : this.sendTelegrafText(sendMessageDto);
  }



  private cronConvert(schedule: string | Date): string {
    schedule = new Date(schedule);
    const day = schedule.getDate();
    const month = schedule.getMonth() +1;
    const years = schedule.getFullYear();
    const hour = schedule.getHours();
    const minuts = schedule.getMinutes();
    return `${minuts} ${hour} ${day} ${month} *`;
  }

  async sendSchedule(sendMessageDto: SendMessageDto) {
    const cronConvertTime = this.cronConvert(sendMessageDto.schedule)
    cron.schedule(cronConvertTime, async ()=> {
      await this.sendMessageSwitch(sendMessageDto);
    })
  }
}
