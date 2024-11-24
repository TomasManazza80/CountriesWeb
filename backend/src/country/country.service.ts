import { Injectable} from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CountryService {
  constructor(private readonly httpService: HttpService) {}

  async findOne(name: string) {
    try {
      const url = process.env.API_URL_COUNTRIES;
      const response = await this.httpService.get(`${url}/${name}`).toPromise();
      return response.data;
    } catch (error) {
      if (error.response.status === 404) {
        return { error: 'País no encontrado' };
      } else {
        throw error;
      }
    }
  }


}
