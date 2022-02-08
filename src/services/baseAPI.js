import { toast } from 'react-toastify';

export const BASE_URL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export async function fetchCreator(url = '', option = {}) {
  try {
    const response = await fetch(url, option);

    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      toast('Something wrong');
    }
  } catch (error) {
    toast(error.message);
  }
}
