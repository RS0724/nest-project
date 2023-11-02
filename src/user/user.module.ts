import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Prisma } from '@prisma/client';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EmailService } from 'src/Email/sendEmail.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, EmailService],
})
export class UserModule {}
