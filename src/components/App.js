import '../styles/main.scss';
import Header from './Header';
import Container from './Container';
import Converter from './Converter';
import { getExchangeRates } from '../services/API';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    getExchangeRates().then(data => {
      const result = data.filter(item => item.ccy !== 'BTC');
      setCurrencies(result);
    });
  }, []);

  return (
    <div className="App">
      <Header currencies={currencies} />
      <Container>
        <Converter />
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
