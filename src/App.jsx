import { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [gold, setGold] = useState('0');
  const [silver, setSilver] = useState('0');
  const [bronze, setBronze] = useState('0');

  const handleAddCountry = (event) => {
    event.preventDefault();
    const existingCountry = countries.find((c) => c.countryName === country);
    if (existingCountry) {
      return alert('이미 추가된 국가입니다.');
    }
    const newCountries = {
      countryName: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };

    setCountries([...countries, newCountries]);
    console.log('countries--->', countries);
  };

  const handleUpdateCountry = (event) => {
    event.preventDefault();
    const existCountry = countries.find((item) => {
      return item.countryName === country;
    });
    if (existCountry) {
      const updateCountry = countries.map((c) => {
        if (c.countryName === country) {
          return {
            ...c,
            gold: gold,
            silver: silver,
            bronze: bronze,
          };
        } else {
          return c;
        }
      });
      setCountries(updateCountry);
    } else {
      alert('등록되지 않은 국가입니다.');
    }
  };

  const handleDeleteCountry = (name) => {
    const filteredCountries = countries.filter((c) => c.countryName !== name);
    setCountries(filteredCountries);
  };

  return (
    <div className='container'>
      <h1 className='title'>2024 파리 올림픽</h1>
      <Form
        countries={countries}
        country={country}
        setCountry={setCountry}
        gold={gold}
        setGold={setGold}
        silver={silver}
        setSilver={setSilver}
        bronze={bronze}
        setBronze={setBronze}
        handleAddCountry={handleAddCountry}
        handleUpdateCountry={handleUpdateCountry}
      />
      <Table countries={countries} handleDeleteCountry={handleDeleteCountry} />
    </div>
  );
}

export default App;
