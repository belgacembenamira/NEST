/* eslint-disable prettier/prettier */

import { AdressRpository } from '../repositories/AdressRepository';
import { Address } from '../entities/Address';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AdressService {
  constructor(private adressRepository: AdressRpository) {}

  async createAdress(adress: Address): Promise<Address> {
    try {
      return await this.adressRepository.createAdress(adress);
    } catch (error) {
      throw error;
    }
  }

  async getAllAdress(): Promise<Array<Address>> {
    try {
      return this.adressRepository.getAllAdress();
    } catch (error) {
      throw error;
    }
  }
}
