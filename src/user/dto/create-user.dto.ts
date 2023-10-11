import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Matches, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'Rose Silva'})
    @IsString()
    name: string;

    @ApiProperty({ example: 'email@email.com'})
    @IsEmail()
    email: string;

    @ApiProperty({ example: '@Abcd123'})
    @IsString()
    @MinLength(8, { message: 'Senha deve conter 8 digitos' })
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
    password: string;

    @ApiProperty({ example: 'link.com/jpg.jpg'})
    @IsString()
    picture: string;
}
