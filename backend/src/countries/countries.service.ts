import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CountriesService {
  constructor(private readonly httpService: HttpService) {}

 async findAll() {
  try {
    const url=process.env.API_URL_COUNTRIES;
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  } catch (error) {
    throw error;
  }
}

}
