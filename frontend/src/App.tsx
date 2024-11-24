import { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/search/searchbar';
import CountryCard from './components/CountryCard/country_card';
import './index.css';

interface Country {
  name: string;
  countryCode: string;
}

const App = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  const handleSearch = async () => {
    try {
      const response : any = await axios.get<Country[]>('http://localhost:3000/countries/AllCountries');
      console.log(response.data);
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const findCountry = async (name: string) => {
    try {
      const response = await axios.get<Country[]>('http://localhost:3000/countries/AllCountries');
      console.log(response.data);
      const countryFound = response.data.find((country) => country.name.toLowerCase() === name.toLowerCase());
      if (countryFound) {
        setCountries([countryFound]);
      } else {
        console.log(`No se encontró el país ${name}`);
      }
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  return (
    <div className="h-full w-screen bg-white flex flex-col items-center py-10">
      <h1 className='text-black mb-10'>🔍Search Your Country🌎</h1>
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <div className='flex'>
          <SearchBar onSearch={findCountry} />
          <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-40 h-11 mt-5' onClick={handleSearch}>AllCountries</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          {Array.isArray(countries) && countries.map((country) => (
            <CountryCard key={country.countryCode} country={country} />
          ))}
        </div>
      </div>

      <p className='text-black m-5'>by Tomas Manazza © 2024</p>

    </div>
  );
};  

export default App;