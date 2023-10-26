import { ApiProperty } from "@nestjs/swagger";

export class SendMessageDto{ 
    @ApiProperty({example: "Olá estou funcionando"})
    message: string; 

    @ApiProperty({example: -1002033466946})
    chatid: number; 

    @ApiProperty({example: "6817582929:AAFaA9B_1prmnon66wZmjENpOZbFgUigCtE"})
    tokenbot: string;

    @ApiProperty({example: []})
    images: string[] | undefined

    @ApiProperty({example: "2023-10-26T20:40:00"})
    schedule: string | Date
}