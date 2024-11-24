import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './countries/countries.module';
import { CountryModule } from './country/country.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,   
      envFilePath: '.env', // Especifique la ubicación de su archivo .env
    }),
    CountriesModule, 
    CountryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
