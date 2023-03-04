/* eslint-disable prettier/prettier */
import { DataSource, Repository } from 'typeorm';
import { Address } from '../entities/Address';
import { Injectable } from '@nestjs/common';
@Injectable()  
export class AdressRpository extends Repository<Address> {
  constructor(private datasource: DataSource) {
    super(Address, datasource.createEntityManager());
  }
  async createAdress(adress: Address): Promise<Address> {
    try {
      
      console.log('===============***=====================');
      console.log(adress);
      console.log('====================================');
      return this.save(adress);
    } catch (error) {
      throw error;
    }
  }

  async getAllAdress(): Promise<Array<Address>> {
    try {
      return this.find();
    } catch (error) {
      throw error;
    }
  }
}
