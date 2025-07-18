import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotificationBody {
    @IsNotEmpty() //não pode estar vazio
    @IsUUID()
    recipientId: string;
    
    @IsNotEmpty()
    @Length(5, 240) //quantidade de caracteres
    content: string;
    
    @IsNotEmpty()
    category: string;
}