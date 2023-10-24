import { Module } from "@nestjs/common";
import { telegramService } from "./telegram.service";

@Module({
    imports: [],
    controllers: [],
    providers: [telegramService],
  })
  export class TelegramMudule {}