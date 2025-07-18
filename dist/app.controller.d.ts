import { PrismaService } from './prisma.service';
import { CreateNotificationBody } from './create-notification-body';
export declare class AppController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(): any;
    create(body: CreateNotificationBody): Promise<void>;
}
