import { Module } from "@nestjs/common";
import { telegramService } from "./telegram.service";
import { TelegramContorller } from "./telegram.controller";

@Module({
    imports: [],
    controllers: [TelegramContorller],
    providers: [telegramService],
  })
  export class TelegramMudule {}