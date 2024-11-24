import React, { useState } from 'react';
import axios from 'axios';
import CountryDetails from './countryDetail.tsx';

interface Country {
    name: string;
    countryCode: string;
}

interface CountryInfo {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: Array<{ commonName: string; officialName: string; countryCode: string; region: string }>;
}

interface CountryCardProps {
    country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
    const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);
    const [showFloat, setShowFloat] = useState(false);

    const handleClick = async () => {
        try {
            const response = await axios.get<CountryInfo>(`https://date.nager.at/api/v3/CountryInfo/${country.countryCode}`);
            setCountryInfo(response.data);
            setShowFloat(true);
        } catch (error) {
            console.error('Error fetching country info:', error);
        }
    };

    return (
        <div>
            <div className="border rounded-lg p-4 shadow-md bg-white w-full cursor-pointer" onClick={handleClick}>
                <h2 className="text-xl text-gray-800 font-bold mb-2">{country.name}</h2>
            </div>
            {showFloat && countryInfo && (
    <div className={`fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center transition-all duration-500 ease-in-out ${showFloat ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`bg-white rounded-lg p-4 shadow-md w-1/2 transition-all duration-500 ease-in-out ${showFloat ? 'translate-y-0' : 'translate-y-20'}`}>
            <CountryDetails country={countryInfo} />
            <button onClick={() => setShowFloat(false)} className="transition-all duration-500 ease-in-out hover:bg-gray-200">Close </button>
        </div>
    </div>
)}
        </div>
    );
};

export default CountryCard;