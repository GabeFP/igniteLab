import { Replace } from "src/helpers/Replace";
import { Content } from "./content";
import { randomUUID } from "node:crypto";

export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null; //"?" = opcional || pode ser um valor date, undefinied ou nulo
    canceledAt?: Date | null;
    createdAt: Date;
}


export class Notification {
    private _id: string;
    private props: NotificationProps;

    constructor(props: Replace<NotificationProps, { createdAt?: Date }>, id?: string) {
        this._id = id ?? randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        };
    }

    public get id() {
        return this._id;
    }

    public set recipientId(recipientId: string) {
        this.props.recipientId = recipientId;
    }

    public get recipientId(): string {
        return this.props.recipientId;
    }

    public set content(content: Content) {
        this.props.content = content;
    }

    public get content(): Content {
        return this.props.content;
    }


    public set category(category: string) {
        this.props.category = category;
    }

    public get category(): string {
        return this.props.category;
    }

    public read() {
        return this.props.readAt = new Date();
    }

    public unread() {
        return this.props.readAt = null;
    }

    public get readAt(): Date | null | undefined {
        return this.props.readAt;
    }

    public cancel() {
        this.props.canceledAt = new Date();
    }


    public get createdAt(): Date {
        return this.props.createdAt;
    }

    public get canceledAt(): Date | null | undefined {
        return this.props.canceledAt;
    }
}

/*const notification = new Notification({
    content: 'Corvette',
    category: 'Social',
});*/