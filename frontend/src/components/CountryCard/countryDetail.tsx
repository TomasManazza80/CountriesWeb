import React from 'react';

interface CountryInfo {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: Array<{ commonName: string; officialName: string; countryCode: string; region: string }>;
}

interface CountryDetailsProps {
    country: CountryInfo | null;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
    if (!country) {
        return null;
    }

    return (
        <div className="mt-4 p-4 bg-black bg-opacity-50 rounded-lg mb-4">
            <h2 className="text-xl font-bold mb-2">🌐 Additional information</h2>
            <p><strong>◼ Common Name:</strong> {country.commonName}</p>
            <p><strong>◼ Official Name:</strong> {country.officialName}</p>
            <p><strong>◼ Continent:</strong> {country.region}</p>
            <p><strong>◼ Country Code:</strong> {country.countryCode}</p>
            <div>
                <h3 className="font-bold mt-2">🧭 Bordering Countries:</h3>
                <ul className="list-disc list-inside">
                    {country.borders.map((border) => (
                        <li key={border.countryCode}>{border.commonName} ({border.officialName})</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CountryDetails;
