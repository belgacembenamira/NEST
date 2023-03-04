/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Address } from '../models/entities/Address';

import { AdressService } from '../models/services/AdressService';
import { CreateAdresseDto } from '../models/DTO/CreateAdresseDto';

@Controller('adresse')
export class AddressController {
  constructor(private addressService: AdressService) {}

  @Post('/create')
  async createAddress(@Body() address: CreateAdresseDto): Promise<Address> {
    try {
      return (await this.addressService.createAdress(address)) as Address;
    } catch (error) {
      throw error;
    }
  }

  @Get('/lister')
  async getAllAddresses(): Promise<Address[]> {
    try {
      return await this.addressService.getAllAdress();
    } catch (error) {
      throw error;
    }
  }
}
