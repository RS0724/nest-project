import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Matches, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'Rose Silva'})
    @IsString()
    name: string;

    @ApiProperty({ example: 'rosesilva@gmail.com'})
    @IsEmail()
    email: string;

    @ApiProperty({ example: '@abcd123'})
    @IsString()
    @MinLength(8, { message: 'Senha deve conter 8 digitos' })
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
    password: string;

    @ApiProperty({ example: 'Link'})
    @IsString()
    picture: string;
}
