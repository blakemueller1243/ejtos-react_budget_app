import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;

    dispatch({
      type: 'CHG_CURRENCY',
      payload: newCurrency,
    });
  };

  return (
    <div>
      <label htmlFor="currencySelector">Choose Currency: </label>
      <select id="currencySelector" value={currency} onChange={handleCurrencyChange} style={{ backgroundColor: 'lightgreen', color: 'black' }}>
        <option value="£">£ - British Pound</option>
        <option value="$">$ - US Dollar</option>
        <option value="€">€ - Euro</option>
        <option value="₹">₹ - Indian Rupee</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
