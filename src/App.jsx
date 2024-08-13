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
    console.log(country);
  };
  const inputGoldHandler = (event) => {
    setGold(event.target.value);
    console.log(gold);
  };
  const inputSilverHandler = (event) => {
    setSilver(event.target.value);
    console.log(silver);
  };
  const inputBronzeHandler = (event) => {
    setBronze(event.target.value);
    console.log(bronze);
  };

  const handleAddCountry = (event) => {
    event.preventDefault();
    const newCountries = {
      country: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };

    setCountries([...countries, newCountries]);
    console.log('countries--->', countries);
  };

  return (
    <div className='container'>
      <h1>올림픽</h1>
      <form action='#'>
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
        <button>업데이트</button>
      </form>
    </div>
  );
}

export default App;
