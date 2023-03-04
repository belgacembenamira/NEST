import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AddressTypes } from '../enums/AddressTypes';
@Entity({ name: 'addresses' })
export class Address {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  street: string;
  @Column()
  city: string;
  @Column()
  country: string;
  @Column()
  postalCode: number;
  @Column()
  type: AddressTypes;
}
