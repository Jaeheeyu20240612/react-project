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

  const FormData = [
    {
      labelText: '국가명',
      id: 'countryName',
      value: country,
      handler: inputCountryHandler,
    },
    {
      labelText: '금메달',
      id: 'goldMedal',
      value: gold,
      handler: inputGoldHandler,
    },
    {
      labelText: '은메달',
      id: 'silverMedal',
      value: silver,
      handler: inputSilverHandler,
    },
    {
      labelText: '동메달',
      id: 'bronzeMedal',
      value: bronze,
      handler: inputBronzeHandler,
    },
  ];

  return (
    <div>
      <form onSubmit={handleAddCountry} className='input-label-wrap'>
        {FormData.map((data) => {
          return (
            <div>
              <label htmlFor={data.id}>{data.labelText}</label>
              <input
                id={data.id}
                value={data.value}
                onChange={data.handler}
                type='text'
              />
            </div>
          );
        })}
        <button type='submit'>국가 추가</button>
        <button onClick={handleUpdateCountry}>업데이트</button>
      </form>
    </div>
  );
};

export default Form;
