import { Module } from '@nestjs/common';
import { CustomerRecordService } from './record.service';
import { CustomerRecordController } from './record.controller';

// import { BotService as TelegramBotService } from 'src/telegram/telegram.service';

@Module({
  providers: [CustomerRecordService],
  controllers: [CustomerRecordController],
  exports: [CustomerRecordService],
})
export class RecordModule {}
