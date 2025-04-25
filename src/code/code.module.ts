import { Module } from '@nestjs/common';
import { CodeGeneratorService } from './code.service';
import { CodeGeneratorController } from './code.controller';

// import { BotService as TelegramBotService } from 'src/telegram/telegram.service';

@Module({
  providers: [CodeGeneratorService],
  controllers: [CodeGeneratorController],
  exports: [CodeGeneratorService],
})
export class CodeModule {}
