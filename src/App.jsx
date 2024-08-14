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

  const existingCountry = () => {
    return countries.find((c) => {
      if (c.countryName === country) {
        return true;
      } else {
        return false;
      }
    });
  };
  const handleAddCountry = (event) => {
    event.preventDefault();
    if (existingCountry()) {
      return alert('이미 추가된 국가입니다.');
    }
    if (!country) {
      return alert('국가명을 입력해주세요');
    }
    const newCountries = {
      countryName: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };

    setCountries([...countries, newCountries]);
    setCountry('');
    setGold('');
    setSilver('');
    setBronze('');
  };

  const handleUpdateCountry = (event) => {
    event.preventDefault();
    if (!country) {
      return alert('국가명을 입력해주세요');
    }
    if (existingCountry()) {
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
    setCountry('');
    setGold('');
    setSilver('');
    setBronze('');
  };

  const handleDeleteCountry = (name) => {
    const filteredCountries = countries.filter((c) => c.countryName !== name);
    setCountries(filteredCountries);
  };

  if (countries.countryName === 0) {
    Table.clas;
  }

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
      {countries.length > 0 ? (
        <Table
          countries={countries}
          handleDeleteCountry={handleDeleteCountry}
        />
      ) : (
        <p className='nonTableComment'>메달 수를 업데이트해주세요!</p>
      )}
    </div>
  );
}

export default App;
