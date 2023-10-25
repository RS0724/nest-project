import { Injectable } from "@nestjs/common";
import { Telegraf } from "telegraf";

@Injectable()
export class telegramService {
    private bot: Telegraf;
    private chatId: string;
    // constructor() {
        
    //     this.bot = new Telegraf('6817582929:AAFaA9B_1prmnon66wZmjENpOZbFgUigCtE');
    //     this.chatId = "-1002033466946";
    // }

    async sendTelegrafText ({message, chatid, tokenbot}:{message: string, chatid: number, tokenbot: string})  {
    try {
            const bot = new Telegraf(tokenbot);
            await this.bot.telegram.sendMessage(chatid, message);
            console.log("Mensagem enviada")        
    } catch (error) {
        console.log("sendTelegrafTexto:", error)
        }
    }
}