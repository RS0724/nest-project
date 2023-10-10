import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

@ApiProperty({ example: CreateUserDto})
export class UpdateUserDto extends PartialType(CreateUserDto) {}
