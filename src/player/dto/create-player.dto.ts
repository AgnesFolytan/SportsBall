import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreatePlayerDto {
    @IsNotEmpty()
    @IsString()
    name: string
    @IsNotEmpty()
    @IsNumber()
    goalCount: number
    @IsNotEmpty()
    @IsDate()
    birthDate: Date
}
