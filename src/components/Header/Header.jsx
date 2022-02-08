import PropTypes from 'prop-types';
import ExchangeRates from '../ExchangeRates';
import styles from './Header.module.scss';

const Header = ({ currencies }) => {
  return (
    <header className={styles.header}>
      <ExchangeRates currencies={currencies} />
    </header>
  );
};

Header.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      ccy: PropTypes.string.isRequired,
      sale: PropTypes.string.isRequired,
      buy: PropTypes.string.isRequired,
    }),
  ),
};

export default Header;
