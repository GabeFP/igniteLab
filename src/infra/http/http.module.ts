import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotification } from 'src/application/uses-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { CancelNotification } from '@application/uses-cases/cancel-notification';
import { CountRecipientNotifications } from '@application/uses-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/uses-cases/get-recipient-notifications';
import { ReadNotification } from '@application/uses-cases/read-notification';
import { UnreadNotification } from '@application/uses-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}