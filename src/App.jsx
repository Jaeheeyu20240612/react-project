import { useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  const [country, setCountry] = useState('');
  const [gold, setGold] = useState('0');
  const [silver, setSilver] = useState('0');
  const [bronze, setBronze] = useState('0');

  const inputCountryHandler = (event) => {
    setCountry(event.target.value);
    console.log('dddd', country);
  };
  const inputGoldHandler = (event) => {
    setGold(event.target.value);
    // console.log(gold);
  };
  const inputSilverHandler = (event) => {
    setSilver(event.target.value);
    // console.log(silver);
  };
  const inputBronzeHandler = (event) => {
    setBronze(event.target.value);
    // console.log(bronze);
  };

  const handleAddCountry = (event) => {
    event.preventDefault();
    const existingCountry = countries.find((c) => {
      return c.countryName === country;
    });
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
      <div className='input-label-wrap'>
        <div>
          <label htmlFor='countryName'>국가명</label>
          <input
            id='countryName'
            value={country}
            onChange={inputCountryHandler}
            type='text'
          />
        </div>
        <div>
          <label htmlFor='goldMedal'>금메달</label>
          <input
            id='goldMedal'
            value={gold}
            onChange={inputGoldHandler}
            type='text'
          />
        </div>
        <div>
          <label htmlFor='silverMedal'>은메달</label>
          <input
            id='silverMedal'
            value={silver}
            onChange={inputSilverHandler}
            type='text'
          />
        </div>
        <div>
          <label htmlFor='bronzeMedal'>동메달</label>
          <input
            id='bronzeMedal'
            value={bronze}
            onChange={inputBronzeHandler}
            type='text'
          />
        </div>
        <button onClick={handleAddCountry}>국가 추가</button>
        <button onClick={handleUpdateCountry}>업데이트</button>
      </div>
      <div className='table-wrap'>
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {countries
              .slice()
              .sort((a, b) => {
                if (b.gold !== a.gold) {
                  return b.gold - a.gold;
                }
                if (b.silver !== a.silver) {
                  return b.silver - a.silver;
                }
                if (b.bronze !== a.bronze) {
                  return b.bronze - a.bronze;
                }
              })
              .map((country) => (
                <tr>
                  <td>{country.countryName}</td>
                  <td>{country.gold}</td>
                  <td>{country.silver}</td>
                  <td>{country.bronze}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteCountry(country.countryName)}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
