import PropTypes from 'prop-types';

import Currency from '../Currency/Currency';
import styles from './ExchangeRates.module.scss';

const ExchangeRates = ({ currencies }) => {
  return (
    <div className={styles.boxExchangeRates}>
      {currencies.map(({ ccy, sale, buy }) => (
        <Currency key={ccy} ccy={ccy} sale={sale} buy={buy} />
      ))}
    </div>
  );
};

ExchangeRates.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      ccy: PropTypes.string.isRequired,
      sale: PropTypes.string.isRequired,
      buy: PropTypes.string.isRequired,
    }),
  ),
};

export default ExchangeRates;
