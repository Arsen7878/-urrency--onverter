import PropTypes from 'prop-types';
import styles from './ConverterElement.module.scss';
import Select from '../Select';
import Input from '../Input';

const ConverterElement = ({
  typeInput,
  currencies,
  onAmmountHandler,
  onCurrencyHandler,
  amount,
  currency,
}) => {
  return (
    <div className={styles.boxConverterElement}>
      <Input
        type={typeInput}
        onAmmountHandler={onAmmountHandler}
        amount={amount}
      />
      <Select
        currencies={currencies}
        currency={currency}
        onCurrencyHandler={onCurrencyHandler}
      />
    </div>
  );
};

ConverterElement.propTypes = {
  typeInput: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired),
  onAmmountHandler: PropTypes.func.isRequired,
  onCurrencyHandler: PropTypes.func.isRequired,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currency: PropTypes.string.isRequired,
};

export default ConverterElement;
