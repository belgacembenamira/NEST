/* eslint-disable @typescript-eslint/ban-types */
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { AddressTypes } from '../enums/AddressTypes';

export class CreateAdresseDto {
  @IsNotEmpty({ message: 'id required', always: true })
  id: Number;

  @IsNotEmpty({ message: 'required' })
  street: string;


  @IsNotEmpty({ message: 'required' })
  postalCode: number;

  @IsString()
  @IsNotEmpty({ message: 'required' })
  city: string;

  @IsString()
  @IsNotEmpty({ message: 'required' })
  country: string;

  @IsEnum(AddressTypes)
  @IsNotEmpty()
  type: AddressTypes;
}
