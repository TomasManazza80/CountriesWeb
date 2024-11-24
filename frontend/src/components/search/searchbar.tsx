import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  
  

  return (
    <form onSubmit={handleSubmit} className='bg-blue flex items-center'>
      
      <br />
      <input
        type="text"
        placeholder="                     Country Name..."
        value={searchTerm}
        onChange={handleChange}
        className='w-80 h-12 text-black bg-white rounded-xl' 
      />
      
      <br />
      <button type="submit" className='m-5'>search</button>
     
    </form>
  );
}

export default SearchBar;