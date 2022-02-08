import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function onConvert(buyValue, saleValue, amount) {
  const res = (Number(saleValue) / Number(buyValue)) * Number(amount);
  return Math.round(res * 100) / 100;
}

export const isValidCurrencies = (currency1, currency2) => {
  if (currency1 === currency2) {
    toast('Выберете другую валюту');
    return false;
  } else {
    return true;
  }
};
