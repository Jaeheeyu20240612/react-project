import React from 'react';

const Form = ({
  country,
  setCountry,
  gold,
  setGold,
  silver,
  setSilver,
  bronze,
  setBronze,
  handleAddCountry,
  handleUpdateCountry,
}) => {
  const inputCountryHandler = (event) => {
    setCountry(event.target.value);
  };
  const inputGoldHandler = (event) => {
    setGold(event.target.value);
  };
  const inputSilverHandler = (event) => {
    setSilver(event.target.value);
  };
  const inputBronzeHandler = (event) => {
    setBronze(event.target.value);
  };

  return (
    <div>
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
    </div>
  );
};

export default Form;
