import React, { useEffect, useState } from 'react';
import ConverterElement from '../ConverterElement';
import styles from './Converter.module.scss';
import { getExchangeRates } from 'services/API';
import { onConvert, isValidCurrencies } from 'utils';

const Converter = () => {
  const [amount1, setAmmount1] = useState(1);
  const [amount2, setAmmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');
  const [currencies, setCurrencies] = useState([]);
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    getExchangeRates().then(data => {
      let rates = data.reduce((acc, item) => {
        acc = { ...acc, [item.ccy]: { sale: item.sale, buy: item.buy } };

        return acc;
      }, {});

      const UAH = { UAH: { sale: 1, buy: 1 } };

      rates = { ...rates, ...UAH };

      setExchangeRates(rates);

      let currencies = data.reduce((acc, item) => {
        if (item.ccy !== 'BTC') {
          acc.push(item.ccy);
        }
        return acc;
      }, []);

      currencies = ['UAH', ...currencies];

      setCurrencies(currencies);
    });
  }, []);

  const onAmmountHandler1 = amount1 => {
    if (isValidCurrencies(currency1, currency2)) {
      const value = onConvert(
        exchangeRates[currency2].sale,
        exchangeRates[currency1].buy,
        amount1,
      );

      setAmmount2(value);
      setAmmount1(amount1);
    }
  };

  const onAmmountHandler2 = amount2 => {
    if (isValidCurrencies(currency1, currency2)) {
      const value = onConvert(
        exchangeRates[currency1].sale,
        exchangeRates[currency2].buy,
        amount2,
      );
      setAmmount1(value);

      setAmmount2(amount2);
    }
  };

  const onCurrencyHandler1 = currency1 => {
    if (isValidCurrencies(currency1, currency2)) {
      const value = onConvert(
        exchangeRates[currency2].sale,
        exchangeRates[currency1].buy,
        amount1,
      );

      setAmmount2(value);
      setCurrency1(currency1);
    }
  };

  const onCurrencyHandler2 = currency2 => {
    if (isValidCurrencies(currency1, currency2)) {
      const value = onConvert(
        exchangeRates[currency1].sale,
        exchangeRates[currency2].buy,
        amount2,
      );
      setAmmount1(value);
      setCurrency2(currency2);
    }
  };

  return (
    <div className={styles.converter}>
      <h2 className={styles.title}>Конвертер валют</h2>
      <div className={styles.boxConverter}>
        {currencies && (
          <>
            <ConverterElement
              currencies={currencies}
              typeInput="number"
              onAmmountHandler={onAmmountHandler1}
              onCurrencyHandler={onCurrencyHandler1}
              amount={amount1}
              currency={currency1}
            />
            <ConverterElement
              currencies={currencies}
              typeInput="number"
              onAmmountHandler={onAmmountHandler2}
              onCurrencyHandler={onCurrencyHandler2}
              amount={amount2}
              currency={currency2}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Converter;
