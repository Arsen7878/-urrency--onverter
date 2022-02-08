import PropTypes from 'prop-types';
import styles from './Currency.module.scss';

const Currency = ({ ccy, buy, sale }) => {
  return (
    <div className={styles.tableCurrency}>
      <div className={styles.boxTableCurrency}>
        <p className={styles.text}>Вид валюты</p>
        <span>{ccy}</span>
      </div>
      <div className={styles.boxTableCurrency}>
        <p className={styles.text}>Продажа</p>
        <span>{sale}</span>
      </div>
      <div className={styles.boxTableCurrency}>
        <p className={styles.text}>Покупка</p>
        <span>{buy}</span>
      </div>
    </div>
  );
};

Currency.propTypes = {
  ccy: PropTypes.string.isRequired,
  buy: PropTypes.string.isRequired,
  sale: PropTypes.string.isRequired,
};

export default Currency;
