import PropTypes from 'prop-types';
import styles from './Select.module.scss';

const Select = ({ currencies, currency, onCurrencyHandler }) => {
  return (
    <select
      value={currency}
      onChange={e => onCurrencyHandler(e.target.value)}
      className={styles.select}
    >
      {currencies.map(currency => (
        <option value={currency} key={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired),
  currency: PropTypes.string.isRequired,
  onCurrencyHandler: PropTypes.func.isRequired,
};

export default Select;
