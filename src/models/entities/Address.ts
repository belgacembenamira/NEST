/* eslint-disable @typescript-eslint/ban-types */
import { AddressTypes } from '../enums/AddressTypes';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { CreateAdresseDto } from '../DTO/CreateAdresseDto';

@Entity({ name: 'adress' })
export class Address {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column()
  street: string;
  @Column()
  city: string;
  @Column()
  country: string;
  @Column()
  postalCode: number;

  @Column({
    type: 'enum',
    enum: AddressTypes,
  })
  @IsNotEmpty({ message: 'required' })
  type: AddressTypes;
}
