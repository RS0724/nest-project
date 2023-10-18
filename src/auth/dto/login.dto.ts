import { ApiProduces, ApiProperty } from "@nestjs/swagger";

export class loginDto {
    @ApiProperty()
    email: string;

    @ApiProperty({example: "@@Ab123F"})
    password: string
}