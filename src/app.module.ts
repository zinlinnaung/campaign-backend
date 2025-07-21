import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';

import { ConfigModule } from '@nestjs/config';
// import { AuthenticationModule } from './authentication/authentication.module';
// import { APP_GUARD } from '@nestjs/core';
// import { AtGuard } from './common/guards/at.guard';

import { MulterModule } from '@nestjs/platform-express';
import { CodeModule } from './code/code.module';
import { RecordModule } from './record/record.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
// import { TelegramModule } from './telegram/telegram.module';
// import { CmsModule } from './cms/cms.module';
// import { QueueModule } from './queue/queue.module';
// import { BotModule } from './bot/bot.module';
// import { TelegramModule } from './telegram/telegram.module';
// import { FlowModule } from './flow/flow.module';
// import { EditorFlowModule } from './editor/editor.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MulterModule.register({
      dest: './uploads', // Specify the destination directory here
    }),
    CodeModule,
    RecordModule,
    PrismaModule,
    // CmsModule,
    // BotModule,
    // QueueModule,
    // LogModule,
    // FlowModule,
    // TelegramModule,
    // EditorFlowModule,
  ],
  controllers: [],
  // providers: [{ provide: APP_GUARD, useClass: AtGuard }],
})
export class AppModule {}
