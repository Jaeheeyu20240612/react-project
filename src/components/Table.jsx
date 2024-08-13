import React from 'react';

const Table = ({ countries, handleDeleteCountry }) => {
  return (
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
  );
};

export default Table;
