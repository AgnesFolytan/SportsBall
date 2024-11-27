import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreatePlayerDto {
    @IsNotEmpty()
    @IsString()
    name: string
    @IsNotEmpty()
    @IsNumber()
    goalCount: number
    @IsNotEmpty()
    @IsDateString()
    birthDate: Date
}
